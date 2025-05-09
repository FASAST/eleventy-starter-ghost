//https://github.com/dollarshaveclub/reframe.js/tree/master
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory())
    : typeof define === "function" && define.amd
      ? define(factory)
      : ((global = global || self), (global.reframe = factory()));
})(this, function () {
  "use strict";

  function reframe(target, cName) {
    var frames =
      typeof target === "string" ? document.querySelectorAll(target) : target;
    var c = cName || "kg-responsive-container";
    if (!("length" in frames)) frames = [frames];
    for (var i = 0; i < frames.length; i += 1) {
      console.log("Frame " + frames[i]);
      var frame = frames[i];
      var hasClass = frame.className.split(" ").indexOf(c) !== -1;
      if (hasClass || frame.style.width.indexOf("%") > -1) continue;
      var h = frame.getAttribute("height") || frame.offsetHeight;
      var w = frame.getAttribute("width") || frame.offsetWidth;
      var padding = (h / w) * 100;
      var div = document.createElement("div");
      div.className = c;
      var divStyles = div.style;
      divStyles.position = "relative";
      divStyles.width = "100%";
      divStyles.paddingTop = padding + "%";
      var frameStyle = frame.style;
      frameStyle.position = "absolute";
      frameStyle.width = "100%";
      frameStyle.height = "100%";
      frameStyle.left = "0";
      frameStyle.top = "0";
      frame.parentNode.insertBefore(div, frame);
      frame.parentNode.removeChild(frame);
      div.appendChild(frame);
    }
  }

  return reframe;
});
