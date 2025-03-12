window.addEventListener("resize", updateCanvas);
window.addEventListener("load", initialDraw);

let scene = null;

/* Generated static points */
const maskPoints = [
  { x: 21, y: 8 },
  { x: 24, y: 8 },
  { x: 27, y: 8 },
  { x: 30, y: 8 },
  { x: 33, y: 8 },
  { x: 36, y: 8 },
  { x: 22, y: 9 },
  { x: 25, y: 9 },
  { x: 28, y: 9 },
  { x: 31, y: 9 },
  { x: 34, y: 9 },
  { x: 37, y: 9 },
  { x: 17, y: 10 },
  { x: 20, y: 10 },
  { x: 24, y: 10 },
  { x: 27, y: 10 },
  { x: 30, y: 10 },
  { x: 33, y: 10 },
  { x: 37, y: 10 },
  { x: 40, y: 10 },
  { x: 43, y: 10 },
  { x: 16, y: 11 },
  { x: 19, y: 11 },
  { x: 39, y: 11 },
  { x: 42, y: 11 },
  { x: 13, y: 12 },
  { x: 17, y: 12 },
  { x: 39, y: 12 },
  { x: 42, y: 12 },
  { x: 46, y: 12 },
  { x: 44, y: 13 },
  { x: 11, y: 14 },
  { x: 45, y: 14 },
  { x: 48, y: 14 },
  { x: 12, y: 15 },
  { x: 47, y: 15 },
  { x: 10, y: 16 },
  { x: 48, y: 16 },
  { x: 8, y: 17 },
  { x: 11, y: 17 },
  { x: 49, y: 17 },
  { x: 9, y: 18 },
  { x: 17, y: 18 },
  { x: 20, y: 18 },
  { x: 41, y: 18 },
  { x: 49, y: 18 },
  { x: 9, y: 19 },
  { x: 17, y: 19 },
  { x: 20, y: 19 },
  { x: 24, y: 19 },
  { x: 37, y: 19 },
  { x: 40, y: 19 },
  { x: 43, y: 19 },
  { x: 50, y: 19 },
  { x: 15, y: 20 },
  { x: 18, y: 20 },
  { x: 21, y: 20 },
  { x: 24, y: 20 },
  { x: 36, y: 20 },
  { x: 39, y: 20 },
  { x: 42, y: 20 },
  { x: 49, y: 20 },
  { x: 9, y: 21 },
  { x: 15, y: 21 },
  { x: 19, y: 21 },
  { x: 22, y: 21 },
  { x: 25, y: 21 },
  { x: 33, y: 21 },
  { x: 36, y: 21 },
  { x: 40, y: 21 },
  { x: 44, y: 21 },
  { x: 50, y: 21 },
  { x: 21, y: 22 },
  { x: 24, y: 22 },
  { x: 32, y: 22 },
  { x: 35, y: 22 },
  { x: 49, y: 22 },
  { x: 9, y: 23 },
  { x: 24, y: 23 },
  { x: 32, y: 23 },
  { x: 35, y: 23 },
  { x: 49, y: 23 },
  { x: 9, y: 24 },
  { x: 25, y: 24 },
  { x: 33, y: 24 },
  { x: 49, y: 24 },
  { x: 9, y: 25 },
  { x: 49, y: 25 },
  { x: 9, y: 26 },
  { x: 32, y: 26 },
  { x: 8, y: 27 },
  { x: 16, y: 27 },
  { x: 19, y: 27 },
  { x: 22, y: 27 },
  { x: 32, y: 27 },
  { x: 37, y: 27 },
  { x: 40, y: 27 },
  { x: 49, y: 27 },
  { x: 9, y: 28 },
  { x: 15, y: 28 },
  { x: 18, y: 28 },
  { x: 21, y: 28 },
  { x: 26, y: 28 },
  { x: 36, y: 28 },
  { x: 39, y: 28 },
  { x: 42, y: 28 },
  { x: 49, y: 28 },
  { x: 9, y: 29 },
  { x: 15, y: 29 },
  { x: 18, y: 29 },
  { x: 21, y: 29 },
  { x: 24, y: 29 },
  { x: 33, y: 29 },
  { x: 36, y: 29 },
  { x: 39, y: 29 },
  { x: 42, y: 29 },
  { x: 48, y: 29 },
  { x: 8, y: 30 },
  { x: 12, y: 30 },
  { x: 15, y: 30 },
  { x: 18, y: 30 },
  { x: 21, y: 30 },
  { x: 24, y: 30 },
  { x: 27, y: 30 },
  { x: 34, y: 30 },
  { x: 37, y: 30 },
  { x: 40, y: 30 },
  { x: 43, y: 30 },
  { x: 46, y: 30 },
  { x: 50, y: 30 },
  { x: 10, y: 31 },
  { x: 17, y: 31 },
  { x: 20, y: 31 },
  { x: 26, y: 31 },
  { x: 32, y: 31 },
  { x: 36, y: 31 },
  { x: 39, y: 31 },
  { x: 42, y: 31 },
  { x: 50, y: 31 },
  { x: 10, y: 32 },
  { x: 16, y: 32 },
  { x: 20, y: 32 },
  { x: 26, y: 32 },
  { x: 33, y: 32 },
  { x: 38, y: 32 },
  { x: 43, y: 32 },
  { x: 49, y: 32 },
  { x: 9, y: 33 },
  { x: 32, y: 33 },
  { x: 49, y: 33 },
  { x: 9, y: 34 },
  { x: 32, y: 34 },
  { x: 49, y: 34 },
  { x: 9, y: 35 },
  { x: 32, y: 35 },
  { x: 49, y: 35 },
  { x: 9, y: 36 },
  { x: 15, y: 36 },
  { x: 26, y: 36 },
  { x: 33, y: 36 },
  { x: 41, y: 36 },
  { x: 44, y: 36 },
  { x: 50, y: 36 },
  { x: 13, y: 37 },
  { x: 16, y: 37 },
  { x: 26, y: 37 },
  { x: 41, y: 37 },
  { x: 44, y: 37 },
  { x: 50, y: 37 },
  { x: 13, y: 38 },
  { x: 16, y: 38 },
  { x: 25, y: 38 },
  { x: 35, y: 38 },
  { x: 43, y: 38 },
  { x: 49, y: 38 },
  { x: 9, y: 39 },
  { x: 24, y: 39 },
  { x: 35, y: 39 },
  { x: 49, y: 39 },
  { x: 9, y: 40 },
  { x: 34, y: 40 },
  { x: 50, y: 40 },
  { x: 10, y: 41 },
  { x: 35, y: 41 },
  { x: 49, y: 41 },
  { x: 9, y: 42 },
  { x: 15, y: 42 },
  { x: 27, y: 42 },
  { x: 43, y: 42 },
  { x: 49, y: 42 },
  { x: 9, y: 43 },
  { x: 13, y: 43 },
  { x: 16, y: 43 },
  { x: 31, y: 43 },
  { x: 43, y: 43 },
  { x: 46, y: 43 },
  { x: 50, y: 43 },
  { x: 10, y: 44 },
  { x: 16, y: 44 },
  { x: 19, y: 44 },
  { x: 24, y: 44 },
  { x: 27, y: 44 },
  { x: 30, y: 44 },
  { x: 33, y: 44 },
  { x: 38, y: 44 },
  { x: 41, y: 44 },
  { x: 44, y: 44 },
  { x: 8, y: 45 },
  { x: 11, y: 45 },
  { x: 17, y: 45 },
  { x: 20, y: 45 },
  { x: 23, y: 45 },
  { x: 26, y: 45 },
  { x: 29, y: 45 },
  { x: 32, y: 45 },
  { x: 35, y: 45 },
  { x: 39, y: 45 },
  { x: 42, y: 45 },
  { x: 47, y: 45 },
  { x: 50, y: 45 },
  { x: 17, y: 46 },
  { x: 20, y: 46 },
  { x: 23, y: 46 },
  { x: 26, y: 46 },
  { x: 33, y: 46 },
  { x: 36, y: 46 },
  { x: 39, y: 46 },
  { x: 42, y: 46 },
  { x: 8, y: 47 },
  { x: 17, y: 47 },
  { x: 20, y: 47 },
  { x: 23, y: 47 },
  { x: 26, y: 47 },
  { x: 34, y: 47 },
  { x: 37, y: 47 },
  { x: 40, y: 47 },
  { x: 49, y: 47 },
  { x: 18, y: 48 },
  { x: 25, y: 48 },
  { x: 28, y: 48 },
  { x: 31, y: 48 },
  { x: 34, y: 48 },
  { x: 37, y: 48 },
  { x: 11, y: 49 },
  { x: 24, y: 49 },
  { x: 27, y: 49 },
  { x: 30, y: 49 },
  { x: 33, y: 49 },
  { x: 41, y: 49 },
  { x: 47, y: 49 },
  { x: 47, y: 50 },
  { x: 19, y: 51 },
  { x: 47, y: 51 },
  { x: 24, y: 52 },
  { x: 27, y: 52 },
  { x: 30, y: 52 },
  { x: 33, y: 52 },
  { x: 36, y: 52 },
  { x: 13, y: 53 },
  { x: 23, y: 53 },
  { x: 26, y: 53 },
  { x: 29, y: 53 },
  { x: 32, y: 53 },
  { x: 35, y: 53 },
  { x: 41, y: 53 },
  { x: 13, y: 54 },
  { x: 27, y: 54 },
  { x: 30, y: 54 },
  { x: 41, y: 54 },
  { x: 13, y: 55 },
  { x: 29, y: 55 },
  { x: 44, y: 55 },
  { x: 13, y: 56 },
  { x: 19, y: 56 },
  { x: 29, y: 56 },
  { x: 39, y: 56 },
  { x: 45, y: 56 },
  { x: 16, y: 57 },
  { x: 29, y: 57 },
  { x: 43, y: 57 },
  { x: 16, y: 58 },
  { x: 27, y: 58 },
  { x: 30, y: 58 },
  { x: 41, y: 58 },
  { x: 44, y: 58 },
  { x: 26, y: 59 },
  { x: 29, y: 59 },
  { x: 40, y: 59 },
  { x: 18, y: 60 },
  { x: 27, y: 60 },
  { x: 30, y: 60 },
  { x: 39, y: 60 },
  { x: 19, y: 61 },
  { x: 28, y: 61 },
  { x: 31, y: 61 },
  { x: 40, y: 61 },
  { x: 21, y: 62 },
  { x: 28, y: 62 },
  { x: 31, y: 62 },
  { x: 37, y: 62 },
  { x: 20, y: 63 },
  { x: 23, y: 63 },
  { x: 29, y: 63 },
  { x: 34, y: 63 },
  { x: 37, y: 63 },
  { x: 21, y: 64 },
  { x: 24, y: 64 },
  { x: 28, y: 64 },
  { x: 31, y: 64 },
  { x: 35, y: 64 },
  { x: 21, y: 65 },
  { x: 24, y: 65 },
  { x: 27, y: 65 },
  { x: 30, y: 65 },
  { x: 33, y: 65 },
  { x: 36, y: 65 },
  { x: 27, y: 66 },
  { x: 30, y: 66 },
  { x: 33, y: 66 },
  { x: 28, y: 67 },
  { x: 31, y: 67 },
];

class Point {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }

  static randomPointInRange(width, height) {
    const randomIntegerInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    return new Point(
      randomIntegerInRange(0, width),
      randomIntegerInRange(0, height),
      randomIntegerInRange(-30, 30) / 25,
      randomIntegerInRange(-30, 30) / 25
    );
  }
}

class Line {
  constructor(p1, p2, weight) {
    this.p1 = p1;
    this.p2 = p2;
    this.weight = weight;
  }
}

class Scene {
  #pointsCount = 500;
  #maxLineLength = 2500;

  constructor(width, height, maskPoints) {
    this.width = width;
    this.height = height;

    this.points = [];
    this.lines = [];

    for (let index = 0; index < this.#pointsCount; index++) {
      this.points.push(Point.randomPointInRange(width, height));
    }

    maskPoints.forEach((p) => {
      console.log("P ", p.y);

      this.points.push(
        new Point(width / 2 - 300 + p.x * 10, 50 + p.y * 10, 0, 0)
      );
    });
  }

  updateSize(width, height) {
    this.width = width;
    this.height = height;
  }

  tick() {
    this.#movePoints();
    this.#connectPointsWithLines(this.points, this.#maxLineLength);
  }

  // Private methods

  #movePoints = function () {
    this.points.forEach((point) => {
      let nextX = point.x + point.vx;
      let nextY = point.y + point.vy;

      // adjust X to be in bounds box
      if (nextX < 0) {
        nextX = this.width + nextX;
      } else if (nextX > this.width) {
        nextX = nextX - this.width;
      }

      // adjust Y to be in bounds box
      if (nextY < 0) {
        nextY = this.height + nextY;
      } else if (nextY > this.height) {
        nextY = nextY - this.height;
      }

      point.x = nextX;
      point.y = nextY;
    });
  };

  #connectPointsWithLines = function (points, maxLineLength) {
    this.lines = [];
    for (let i = 0; i < points.length - 1; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const p1 = points[i];
        const p2 = points[j];

        const distance = (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;
        if (distance < maxLineLength) {
          this.lines.push(
            new Line(p1, p2, (maxLineLength - distance) / maxLineLength)
          );
        }
      }
    }
  };
}

function initialDraw() {
  var canvas = document.getElementById("main-canvas");
  if (canvas.getContext) {
    // Set actual size in memory (scaled to account for extra pixel density)
    const scale = window.devicePixelRatio;
    const width = window.innerWidth;
    const height = window.innerHeight;

    var ctx = canvas.getContext("2d");

    canvas.width = Math.floor(width * scale);
    canvas.height = Math.floor(height * scale);

    // Normalize coordinate system to use CSS pixels
    ctx.scale(scale, scale);

    scene = new Scene(width, height, maskPoints);

    drawLoop(ctx, scene);
  }
}

function updateCanvas() {
  var canvas = document.getElementById("main-canvas");
  if (canvas.getContext) {
    // Set actual size in memory (scaled to account for extra pixel density)
    const scale = window.devicePixelRatio;
    const width = window.innerWidth;
    const height = window.innerHeight;

    var ctx = canvas.getContext("2d");

    canvas.width = Math.floor(width * scale);
    canvas.height = Math.floor(height * scale);

    // Normalize coordinate system to use CSS pixels
    ctx.scale(scale, scale);

    scene.updateSize(width, height);
  }
}

function drawLoop(ctx, scene) {
  scene.tick();
  drawGradient(ctx, scene.width, scene.height);
  drawPoints(ctx, scene.points);
  drawLines(ctx, scene.lines);

  setTimeout(() => drawLoop(ctx, scene), 20);
}

function drawGradient(ctx, width, height) {
  let gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, "rgb(40 40 40)");
  gradient.addColorStop(1, "black");
  ctx.fillStyle = gradient;

  ctx.fillRect(0, 0, width, height);
}

function drawPoints(ctx, points) {
  for (let index = 0; index < points.length; index++) {
    const point = points[index];

    ctx.fillStyle = "white";
    ctx.fillRect(point.x, point.y, 2, 2);
  }
}

function drawLines(ctx, lines) {
  lines.forEach((line) => {
    let path = new Path2D();
    path.moveTo(line.p1.x, line.p1.y);
    path.lineTo(line.p2.x, line.p2.y);

    const alpha = Math.floor(line.weight * 100);

    ctx.strokeStyle = `rgb(200 200 200 / ${alpha}%)`;
    ctx.lineWidth = line.weight > 0.8 ? 2 : 1;
    ctx.stroke(path);
  });
}
