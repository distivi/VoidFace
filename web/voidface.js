window.addEventListener("resize", updateCanvas);
window.addEventListener("load", initialDraw);

let scene = null;

/* Generated static points */
const maskPoints = [
  { x: 17, y: 6 },
  { x: 21, y: 6 },
  { x: 23, y: 6 },
  { x: 25, y: 6 },
  { x: 50, y: 6 },
  { x: 52, y: 6 },
  { x: 54, y: 6 },
  { x: 56, y: 6 },
  { x: 58, y: 6 },
  { x: 16, y: 7 },
  { x: 18, y: 7 },
  { x: 20, y: 7 },
  { x: 26, y: 7 },
  { x: 27, y: 7 },
  { x: 48, y: 7 },
  { x: 49, y: 7 },
  { x: 55, y: 7 },
  { x: 57, y: 7 },
  { x: 59, y: 7 },
  { x: 15, y: 8 },
  { x: 17, y: 8 },
  { x: 19, y: 8 },
  { x: 21, y: 8 },
  { x: 23, y: 8 },
  { x: 52, y: 8 },
  { x: 54, y: 8 },
  { x: 56, y: 8 },
  { x: 58, y: 8 },
  { x: 60, y: 8 },
  { x: 15, y: 9 },
  { x: 17, y: 9 },
  { x: 19, y: 9 },
  { x: 21, y: 9 },
  { x: 23, y: 9 },
  { x: 25, y: 9 },
  { x: 49, y: 9 },
  { x: 51, y: 9 },
  { x: 53, y: 9 },
  { x: 55, y: 9 },
  { x: 57, y: 9 },
  { x: 59, y: 9 },
  { x: 61, y: 9 },
  { x: 14, y: 10 },
  { x: 16, y: 10 },
  { x: 18, y: 10 },
  { x: 20, y: 10 },
  { x: 22, y: 10 },
  { x: 24, y: 10 },
  { x: 26, y: 10 },
  { x: 28, y: 10 },
  { x: 47, y: 10 },
  { x: 49, y: 10 },
  { x: 51, y: 10 },
  { x: 53, y: 10 },
  { x: 55, y: 10 },
  { x: 57, y: 10 },
  { x: 59, y: 10 },
  { x: 61, y: 10 },
  { x: 14, y: 11 },
  { x: 21, y: 11 },
  { x: 23, y: 11 },
  { x: 25, y: 11 },
  { x: 27, y: 11 },
  { x: 29, y: 11 },
  { x: 46, y: 11 },
  { x: 48, y: 11 },
  { x: 50, y: 11 },
  { x: 52, y: 11 },
  { x: 54, y: 11 },
  { x: 61, y: 11 },
  { x: 24, y: 12 },
  { x: 25, y: 12 },
  { x: 27, y: 12 },
  { x: 29, y: 12 },
  { x: 31, y: 12 },
  { x: 44, y: 12 },
  { x: 46, y: 12 },
  { x: 48, y: 12 },
  { x: 51, y: 12 },
  { x: 26, y: 13 },
  { x: 28, y: 13 },
  { x: 30, y: 13 },
  { x: 32, y: 13 },
  { x: 43, y: 13 },
  { x: 45, y: 13 },
  { x: 47, y: 13 },
  { x: 49, y: 13 },
  { x: 27, y: 14 },
  { x: 29, y: 14 },
  { x: 31, y: 14 },
  { x: 43, y: 14 },
  { x: 45, y: 14 },
  { x: 48, y: 14 },
  { x: 29, y: 15 },
  { x: 45, y: 15 },
  { x: 47, y: 15 },
  { x: 30, y: 16 },
  { x: 31, y: 16 },
  { x: 44, y: 16 },
  { x: 46, y: 16 },
  { x: 31, y: 17 },
  { x: 44, y: 17 },
  { x: 45, y: 17 },
  { x: 21, y: 18 },
  { x: 23, y: 18 },
  { x: 32, y: 18 },
  { x: 44, y: 18 },
  { x: 53, y: 18 },
  { x: 54, y: 18 },
  { x: 19, y: 19 },
  { x: 28, y: 19 },
  { x: 32, y: 19 },
  { x: 43, y: 19 },
  { x: 48, y: 19 },
  { x: 56, y: 19 },
  { x: 57, y: 19 },
  { x: 18, y: 20 },
  { x: 22, y: 20 },
  { x: 23, y: 20 },
  { x: 25, y: 20 },
  { x: 46, y: 20 },
  { x: 50, y: 20 },
  { x: 52, y: 20 },
  { x: 53, y: 20 },
  { x: 58, y: 20 },
  { x: 17, y: 21 },
  { x: 20, y: 21 },
  { x: 22, y: 21 },
  { x: 24, y: 21 },
  { x: 26, y: 21 },
  { x: 28, y: 21 },
  { x: 45, y: 21 },
  { x: 48, y: 21 },
  { x: 50, y: 21 },
  { x: 52, y: 21 },
  { x: 54, y: 21 },
  { x: 56, y: 21 },
  { x: 16, y: 22 },
  { x: 18, y: 22 },
  { x: 19, y: 22 },
  { x: 20, y: 22 },
  { x: 21, y: 22 },
  { x: 22, y: 22 },
  { x: 23, y: 22 },
  { x: 24, y: 22 },
  { x: 25, y: 22 },
  { x: 26, y: 22 },
  { x: 27, y: 22 },
  { x: 28, y: 22 },
  { x: 29, y: 22 },
  { x: 30, y: 22 },
  { x: 31, y: 22 },
  { x: 44, y: 22 },
  { x: 46, y: 22 },
  { x: 47, y: 22 },
  { x: 48, y: 22 },
  { x: 49, y: 22 },
  { x: 50, y: 22 },
  { x: 51, y: 22 },
  { x: 52, y: 22 },
  { x: 53, y: 22 },
  { x: 54, y: 22 },
  { x: 55, y: 22 },
  { x: 56, y: 22 },
  { x: 57, y: 22 },
  { x: 59, y: 22 },
  { x: 13, y: 23 },
  { x: 14, y: 23 },
  { x: 15, y: 23 },
  { x: 16, y: 23 },
  { x: 20, y: 23 },
  { x: 21, y: 23 },
  { x: 22, y: 23 },
  { x: 23, y: 23 },
  { x: 24, y: 23 },
  { x: 25, y: 23 },
  { x: 26, y: 23 },
  { x: 27, y: 23 },
  { x: 28, y: 23 },
  { x: 31, y: 23 },
  { x: 45, y: 23 },
  { x: 48, y: 23 },
  { x: 49, y: 23 },
  { x: 50, y: 23 },
  { x: 51, y: 23 },
  { x: 52, y: 23 },
  { x: 53, y: 23 },
  { x: 54, y: 23 },
  { x: 55, y: 23 },
  { x: 59, y: 23 },
  { x: 60, y: 23 },
  { x: 61, y: 23 },
  { x: 62, y: 23 },
  { x: 17, y: 24 },
  { x: 29, y: 24 },
  { x: 30, y: 24 },
  { x: 34, y: 24 },
  { x: 41, y: 24 },
  { x: 46, y: 24 },
  { x: 58, y: 24 },
  { x: 59, y: 24 },
  { x: 19, y: 25 },
  { x: 20, y: 25 },
  { x: 21, y: 25 },
  { x: 22, y: 25 },
  { x: 23, y: 25 },
  { x: 25, y: 25 },
  { x: 26, y: 25 },
  { x: 27, y: 25 },
  { x: 34, y: 25 },
  { x: 41, y: 25 },
  { x: 48, y: 25 },
  { x: 49, y: 25 },
  { x: 50, y: 25 },
  { x: 53, y: 25 },
  { x: 54, y: 25 },
  { x: 55, y: 25 },
  { x: 56, y: 25 },
  { x: 34, y: 26 },
  { x: 41, y: 26 },
  { x: 34, y: 27 },
  { x: 34, y: 28 },
  { x: 42, y: 28 },
  { x: 33, y: 29 },
  { x: 34, y: 29 },
  { x: 42, y: 29 },
  { x: 33, y: 30 },
  { x: 34, y: 30 },
  { x: 42, y: 30 },
  { x: 43, y: 30 },
  { x: 32, y: 31 },
  { x: 33, y: 31 },
  { x: 34, y: 31 },
  { x: 42, y: 31 },
  { x: 43, y: 31 },
  { x: 31, y: 32 },
  { x: 34, y: 32 },
  { x: 42, y: 32 },
  { x: 44, y: 32 },
  { x: 34, y: 33 },
  { x: 42, y: 33 },
  { x: 45, y: 33 },
  { x: 42, y: 34 },
  { x: 46, y: 34 },
  { x: 29, y: 35 },
  { x: 42, y: 35 },
  { x: 25, y: 36 },
  { x: 26, y: 36 },
  { x: 33, y: 36 },
  { x: 42, y: 36 },
  { x: 49, y: 36 },
  { x: 50, y: 36 },
  { x: 12, y: 37 },
  { x: 23, y: 37 },
  { x: 24, y: 37 },
  { x: 33, y: 37 },
  { x: 42, y: 37 },
  { x: 51, y: 37 },
  { x: 52, y: 37 },
  { x: 12, y: 38 },
  { x: 13, y: 38 },
  { x: 20, y: 38 },
  { x: 21, y: 38 },
  { x: 42, y: 38 },
  { x: 54, y: 38 },
  { x: 55, y: 38 },
  { x: 62, y: 38 },
  { x: 63, y: 38 },
  { x: 13, y: 39 },
  { x: 16, y: 39 },
  { x: 17, y: 39 },
  { x: 34, y: 39 },
  { x: 41, y: 39 },
  { x: 58, y: 39 },
  { x: 59, y: 39 },
  { x: 62, y: 39 },
  { x: 63, y: 39 },
  { x: 13, y: 40 },
  { x: 14, y: 40 },
  { x: 17, y: 40 },
  { x: 18, y: 40 },
  { x: 32, y: 40 },
  { x: 36, y: 40 },
  { x: 37, y: 40 },
  { x: 38, y: 40 },
  { x: 39, y: 40 },
  { x: 40, y: 40 },
  { x: 43, y: 40 },
  { x: 57, y: 40 },
  { x: 58, y: 40 },
  { x: 59, y: 40 },
  { x: 62, y: 40 },
  { x: 14, y: 41 },
  { x: 17, y: 41 },
  { x: 18, y: 41 },
  { x: 19, y: 41 },
  { x: 57, y: 41 },
  { x: 58, y: 41 },
  { x: 61, y: 41 },
  { x: 62, y: 41 },
  { x: 14, y: 42 },
  { x: 15, y: 42 },
  { x: 18, y: 42 },
  { x: 19, y: 42 },
  { x: 34, y: 42 },
  { x: 35, y: 42 },
  { x: 36, y: 42 },
  { x: 39, y: 42 },
  { x: 40, y: 42 },
  { x: 41, y: 42 },
  { x: 42, y: 42 },
  { x: 56, y: 42 },
  { x: 57, y: 42 },
  { x: 61, y: 42 },
  { x: 14, y: 43 },
  { x: 15, y: 43 },
  { x: 19, y: 43 },
  { x: 20, y: 43 },
  { x: 33, y: 43 },
  { x: 34, y: 43 },
  { x: 35, y: 43 },
  { x: 36, y: 43 },
  { x: 37, y: 43 },
  { x: 38, y: 43 },
  { x: 39, y: 43 },
  { x: 40, y: 43 },
  { x: 41, y: 43 },
  { x: 42, y: 43 },
  { x: 55, y: 43 },
  { x: 56, y: 43 },
  { x: 57, y: 43 },
  { x: 60, y: 43 },
  { x: 61, y: 43 },
  { x: 15, y: 44 },
  { x: 16, y: 44 },
  { x: 19, y: 44 },
  { x: 20, y: 44 },
  { x: 21, y: 44 },
  { x: 32, y: 44 },
  { x: 33, y: 44 },
  { x: 34, y: 44 },
  { x: 35, y: 44 },
  { x: 36, y: 44 },
  { x: 39, y: 44 },
  { x: 40, y: 44 },
  { x: 41, y: 44 },
  { x: 42, y: 44 },
  { x: 43, y: 44 },
  { x: 54, y: 44 },
  { x: 55, y: 44 },
  { x: 56, y: 44 },
  { x: 60, y: 44 },
  { x: 15, y: 45 },
  { x: 16, y: 45 },
  { x: 20, y: 45 },
  { x: 21, y: 45 },
  { x: 22, y: 45 },
  { x: 30, y: 45 },
  { x: 31, y: 45 },
  { x: 32, y: 45 },
  { x: 33, y: 45 },
  { x: 34, y: 45 },
  { x: 35, y: 45 },
  { x: 40, y: 45 },
  { x: 41, y: 45 },
  { x: 42, y: 45 },
  { x: 43, y: 45 },
  { x: 44, y: 45 },
  { x: 45, y: 45 },
  { x: 53, y: 45 },
  { x: 54, y: 45 },
  { x: 55, y: 45 },
  { x: 59, y: 45 },
  { x: 60, y: 45 },
  { x: 16, y: 46 },
  { x: 17, y: 46 },
  { x: 21, y: 46 },
  { x: 22, y: 46 },
  { x: 23, y: 46 },
  { x: 24, y: 46 },
  { x: 25, y: 46 },
  { x: 26, y: 46 },
  { x: 27, y: 46 },
  { x: 28, y: 46 },
  { x: 29, y: 46 },
  { x: 30, y: 46 },
  { x: 31, y: 46 },
  { x: 32, y: 46 },
  { x: 33, y: 46 },
  { x: 34, y: 46 },
  { x: 41, y: 46 },
  { x: 42, y: 46 },
  { x: 43, y: 46 },
  { x: 44, y: 46 },
  { x: 45, y: 46 },
  { x: 46, y: 46 },
  { x: 47, y: 46 },
  { x: 48, y: 46 },
  { x: 49, y: 46 },
  { x: 50, y: 46 },
  { x: 51, y: 46 },
  { x: 52, y: 46 },
  { x: 53, y: 46 },
  { x: 54, y: 46 },
  { x: 55, y: 46 },
  { x: 59, y: 46 },
  { x: 17, y: 47 },
  { x: 18, y: 47 },
  { x: 22, y: 47 },
  { x: 23, y: 47 },
  { x: 24, y: 47 },
  { x: 25, y: 47 },
  { x: 26, y: 47 },
  { x: 27, y: 47 },
  { x: 28, y: 47 },
  { x: 29, y: 47 },
  { x: 30, y: 47 },
  { x: 31, y: 47 },
  { x: 32, y: 47 },
  { x: 33, y: 47 },
  { x: 34, y: 47 },
  { x: 42, y: 47 },
  { x: 43, y: 47 },
  { x: 44, y: 47 },
  { x: 45, y: 47 },
  { x: 46, y: 47 },
  { x: 47, y: 47 },
  { x: 48, y: 47 },
  { x: 49, y: 47 },
  { x: 50, y: 47 },
  { x: 51, y: 47 },
  { x: 52, y: 47 },
  { x: 53, y: 47 },
  { x: 54, y: 47 },
  { x: 58, y: 47 },
  { x: 59, y: 47 },
  { x: 17, y: 48 },
  { x: 18, y: 48 },
  { x: 57, y: 48 },
  { x: 58, y: 48 },
  { x: 18, y: 49 },
  { x: 34, y: 49 },
  { x: 35, y: 49 },
  { x: 36, y: 49 },
  { x: 37, y: 49 },
  { x: 38, y: 49 },
  { x: 39, y: 49 },
  { x: 40, y: 49 },
  { x: 41, y: 49 },
  { x: 57, y: 49 },
  { x: 19, y: 50 },
  { x: 57, y: 50 },
  { x: 19, y: 51 },
  { x: 56, y: 51 },
  { x: 20, y: 52 },
  { x: 55, y: 52 },
  { x: 21, y: 53 },
  { x: 54, y: 54 },
  { x: 22, y: 55 },
  { x: 35, y: 55 },
  { x: 36, y: 55 },
  { x: 37, y: 55 },
  { x: 38, y: 55 },
  { x: 39, y: 55 },
  { x: 40, y: 55 },
  { x: 53, y: 55 },
  { x: 23, y: 56 },
  { x: 36, y: 56 },
  { x: 37, y: 56 },
  { x: 38, y: 56 },
  { x: 39, y: 56 },
  { x: 37, y: 57 },
  { x: 38, y: 57 },
  { x: 39, y: 57 },
  { x: 37, y: 58 },
  { x: 38, y: 58 },
  { x: 39, y: 58 },
  { x: 36, y: 59 },
  { x: 37, y: 59 },
  { x: 38, y: 59 },
  { x: 39, y: 59 },
  { x: 36, y: 60 },
  { x: 37, y: 60 },
  { x: 38, y: 60 },
  { x: 39, y: 60 },
  { x: 36, y: 61 },
  { x: 37, y: 61 },
  { x: 38, y: 61 },
  { x: 39, y: 61 },
  { x: 39, y: 62 },
  { x: 36, y: 63 },
  { x: 37, y: 63 },
  { x: 38, y: 63 },
  { x: 39, y: 63 },
  { x: 36, y: 64 },
  { x: 36, y: 65 },
  { x: 37, y: 65 },
  { x: 38, y: 65 },
  { x: 39, y: 65 },
  { x: 36, y: 66 },
  { x: 37, y: 66 },
  { x: 38, y: 66 },
  { x: 39, y: 66 },
  { x: 36, y: 67 },
  { x: 37, y: 67 },
  { x: 38, y: 67 },
  { x: 39, y: 67 },
  { x: 37, y: 68 },
  { x: 37, y: 69 },
  { x: 38, y: 69 },
  { x: 39, y: 69 },
  { x: 37, y: 70 },
  { x: 38, y: 70 },
  { x: 38, y: 71 },
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
  #maxLineLength = 4000;

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
        new Point(width / 2 - 400 + p.x * 10, 50 + p.y * 10, 0, 0)
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
  gradient.addColorStop(0, "rgb(30 30 30)");
  gradient.addColorStop(0.3, "black");
  gradient.addColorStop(0.7, "black");
  gradient.addColorStop(1, "rgb(30 30 70)");
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
