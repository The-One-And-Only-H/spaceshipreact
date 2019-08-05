// stars
let width = window.innerWidth;
let height = window.innerHeight;
let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.speed = Math.random() * 5;
    this.element = document.createElement("div");
    this.element.classList.add("particle");
    this.element.style.right = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    document.body.appendChild(this.element);
  }
  move() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = 0;
    }
    this.element.style.right = `${this.x}px`;
  }
}

for (var i = 0; i < 50; i++) {
  particles.push(new Particle());
}

function animate() {
  for (var i = 0; i < particles.length; i++) {
    particles[i].move();
  }
  window.requestAnimationFrame(animate);
}

animate();

// astronauts
let astronauts = [];

class Astronaut {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.speed = Math.random() * 5;
    this.element = document.createElement("div");
    this.element.classList.add("astronaut");
    this.element.style.right = `${this.x}px`;
    this.element.style.top = `${this.y}px`;
    document.body.appendChild(this.element);
  }
  move() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = 0;
    }
    this.element.style.right = `${this.x}px`;
  }
}

for (var i = 0; i < 10; i++) {
  astronauts.push(new Astronaut());
}

function animate() {
  for (var i = 0; i < astronauts.length; i++) {
    astronauts[i].move();
  }
  window.requestAnimationFrame(animate);
}

animate();

// spaceship
var myGamePiece;

function startGame() {
  myGameArea.start();
  myGamePiece = new component(30, 20, "gray", 100, 350);
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    window.addEventListener("keydown", function(e) {
      myGameArea.key = e.keyCode;
    });
    window.addEventListener("keyup", function(e) {
      myGameArea.key = false;
    });
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
};

function component(width, height, color, x, y) {
  this.gamearea = myGameArea;
  this.width = width;
  this.height = height;
  this.speedX = 0;
  this.speedY = 0;
  this.x = x;
  this.y = y;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  };
}

function updateGameArea() {
  myGameArea.clear();
  myGamePiece.speedX = 0;
  myGamePiece.speedY = 0;
  if (myGameArea.key && myGameArea.key == 37) {
    myGamePiece.speedX = -5;
  }
  if (myGameArea.key && myGameArea.key == 39) {
    myGamePiece.speedX = 5;
  }
  if (myGameArea.key && myGameArea.key == 38) {
    myGamePiece.speedY = -5;
  }
  if (myGameArea.key && myGameArea.key == 40) {
    myGamePiece.speedY = 5;
  }
  myGamePiece.newPos();
  myGamePiece.update();
}

// score
let score;

class Score {
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("score");
    document.body.appendChild(this.element);
  }
}

score = new Score();
console.log(score);
