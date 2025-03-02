require("dotenv").config();

const ghostContentAPI = require("@tryghost/content-api");

// Init Ghost API
const api = new ghostContentAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_CONTENT_API_KEY,
  version: "v5.8"
});

// Get all site information
module.exports = async function () {
  const siteData = await api.settings
    .browse({
      include: "icon,url"
    })
    .catch((err) => {
      console.error(err);
    });

  //if (process.env.SITE_URL) siteData.url = process.env.SITE_URL;
  if (process.env.DEPLOY_URL) siteData.url = process.env.DEPLOY_URL;
  siteData.cover_image = "/assets/theme/starfield5.jpg";

  return siteData;
};
