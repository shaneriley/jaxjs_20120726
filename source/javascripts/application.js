(function(d) {
  window.d = d;
  window.ctx = d.createElement("canvas").getContext("2d");

  d.addEventListener("DOMContentLoaded", function() {
    var s = d.querySelector("section");
    s.innerHTML = s.innerHTML.replace(/\[#.+\]/, "");
  }, false);
})(document);
