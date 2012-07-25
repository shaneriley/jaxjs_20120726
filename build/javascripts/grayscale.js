d.addEventListener("DOMContentLoaded", function() {
  var img = d.querySelector("img");

  img.onload = function() {
    var data;

    ctx.canvas.width = img.width;
    ctx.canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    data = ctx.getImageData(0, 0, img.width, img.height);
    for (var i = 0, len = data.data.length; i < len; i += 4) {
      var avg = (data.data[i] + data.data[i + 1] + data.data[i + 2]) / 3;
      data.data[i] = data.data[i + 1] = data.data[i + 2] = avg;
    }
    ctx.putImageData(data, 0, 0);
    d.querySelector("section").appendChild(ctx.canvas);
  };
}, false);
