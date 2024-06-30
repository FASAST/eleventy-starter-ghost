document.querySelectorAll(".kg-gallery-image img").forEach(function (e) {
  const t = e.closest(".kg-gallery-image"),
    a = e.attributes.width.value / e.attributes.height.value;
  t.style.flex = a + " 1 0%";
});
