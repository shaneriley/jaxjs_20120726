d.addEventListener("DOMContentLoaded", function() {
  var img = d.querySelector("img");

  img.onload = function() {
    ctx.canvas.width = img.width;
    ctx.canvas.height = img.height;
    ctx.clearRect(0, 0, img.width, img.height);
    ctx.translate(img.width, img.height);
    ctx.rotate(Math.PI);
    ctx.drawImage(img, 0, 0);
    d.querySelector("section").appendChild(ctx.canvas);
  };
}, false);
