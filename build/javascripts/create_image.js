d.addEventListener("DOMContentLoaded", function() {
  var img = d.querySelector("img");
  img.onload = function() {
    ctx.canvas.width = img.width;
    ctx.canvas.height = img.height;
  };

  d.querySelector("button").addEventListener("click", function(e) {
    e.preventDefault();
    var watermark = "© §R",
        caption = img.alt,
        watermark_width,
        caption_width;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.drawImage(img, 0, 0);
    ctx.font = "normal italic 16px Trajan Pro";
    ctx.textAlign = "right";
    ctx.fillStyle = "rgba(255, 255, 255, .6)";
    watermark_width = ctx.measureText(watermark).width;
    ctx.fillText(watermark, img.width - 20, img.height - 20);
    ctx.font = "normal 32px Trajan Pro";
    ctx.textAlign = "left";
    caption_width = ctx.measureText(caption).width;
    if (caption_width > img.width - watermark_width - 40) {
      caption = [caption.slice(0, caption.indexOf(",") + 1), caption.slice(caption.indexOf(",") + 2)];
      caption.forEach(function(str, i) {
        ctx.fillText(str, 20, img.height - 30 * (caption.length - i) + i * 10);
      });
    }
    else {
      ctx.fillText(caption, 20, img.height - 20);
    }
    img.src = ctx.canvas.toDataURL();
  }, false);
}, false);
