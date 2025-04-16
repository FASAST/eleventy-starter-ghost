console.log("main.js");

/* Fix video poster uses the data-kg-thumbnail value of the parent figure */
(function () {
  console.log("repostering ...");

  // Get all video elements within figure elements
  const videos = document.querySelectorAll("figure video");
  console.log(videos);

  videos.forEach((video) => {
    // Get the parent figure element
    const figure = video.parentElement.parentElement;

    // Get the data attribute value from the figure (assuming data-background is the attribute name)
    const backgroundUrl = figure.getAttribute('data-kg-thumbnail');
    console.log(backgroundUrl);

    // Check if the data attribute exists and has a value
    if (backgroundUrl) {
      // Set the background image style
      video.style.backgroundImage = `url(${backgroundUrl})`;
    }
  });
  
})();

/* Responsive video in post content */
(function () {
  console.log("reframing ...");
  const sources = [
    '.container iframe[src*="youtube.com"]',
    '.container iframe[src*="youtube-nocookie.com"]',
    '.container iframe[src*="player.vimeo.com"]',
    '.container iframe[src*="kickstarter.com"][src*="video.html"]',
    ".container object",
    ".container embed"
  ];
  reframe(document.querySelectorAll(sources.join(",")));
})();

/* Add lightbox to gallery images */
(function () {
  console.log("lightboxing ...");
  lightbox(
    ".kg-image-card > .kg-image[width][height], .kg-gallery-image > img"
  );
})();
