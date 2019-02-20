import React, { Component } from "react";

// score
class Score {
  constructor() {
    this.element = document.createElement("div");
    this.element.classList.add("score");
    document.body.appendChild(this.element);
    this.counter = 0;
    this.element.innerHTML = this.counter;
  }
  increaseScore(n) {
    this.counter += n;
    this.element.innerHTML = this.counter;
  }
}

let score = new Score();

setInterval(
  function () {
    score.increaseScore(1);
  }, 2000
)