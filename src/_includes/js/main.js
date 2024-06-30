console.log("main.js");

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
