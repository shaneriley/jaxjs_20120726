d.addEventListener("DOMContentLoaded", function() {
  var radius = 30,
      w = 800,
      h = 600;
  var draw = {
    _extend: function(obj, extender) {
      if (!extender) { return obj; }
      for (var k in extender) {
        if (k in obj) {
          if (typeof obj[k] === "object") {
            obj[k] = DummyImage._extend(obj[k], extender[k]);
          }
          else { obj[k] = extender[k]; }
        }
      }
      return obj;
    },
    circle: function(opts) {
      opts = this._extend({
        fill_style: "black",
        x: 10,
        y: 10,
        radius: 10
      }, opts);
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = opts.fill_style;
      ctx.arc(opts.x, opts.y, opts.radius, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    },
    _square: function(style, opts) {
      var offset = /^s/.test(style) ? .5 : 0;
      opts = this._extend({
        x: 0,
        y: 0,
        size: 10,
        fill_style: "black",
        stroke_style: "black"
      }, opts);
      ctx.save();
      ctx[style + "Style"] = opts[style + "_style"];
      ctx[style + "Rect"](opts.x + offset, opts.y + offset, opts.size, opts.size);
      ctx.restore();
    },
    strokeSquare: function(opts) {
      this._square("stroke", opts);
    },
    fillSquare: function(opts) {
      this._square("fill", opts);
    }
  };

  ctx.canvas.width = w;
  ctx.canvas.height = h;

  var procedures = [
    function() {
      draw.circle({
        fill_style: "#ae1f23",
        x: w / 2,
        y: h / 2,
        radius: 100
      });
    },
    function() {
      draw.strokeSquare({
        x: w / 2 - 106,
        y: h / 2 - 106,
        size: 212
      });
    },
    function() {
      draw.fillSquare({
        x: w / 2 - 50,
        y: h / 2 - 50,
        size: 100,
        fill_style: "rgb(0, 51, 204)"
      });
    },
    function() {
      ctx.save();
      ctx.globalCompositeOperation = "source-out";
      draw.fillSquare({
        x: w / 2 - 80,
        y: h / 2 - 5,
        size: 10
      });
      ctx.restore();
    },
    function() {
      ctx.save();
      ctx.beginPath();
      ctx.globalCompositeOperation = "lighter";
      ctx.lineWidth = 3;
      ctx.strokeStyle = "purple";
      ctx.moveTo(w / 2 - 105, h / 2 - 105);
      ctx.lineTo(w / 2 + 106, h / 2 + 106);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
  ];

  d.querySelector("section").appendChild(ctx.canvas);

  var keyupCB = function(e) {
    e.which === 39 && procedures.shift()();
    !procedures.length && d.removeEventListener("keyup", keyupCB, false);
  };
  d.addEventListener("keyup", keyupCB, false);
}, false);
