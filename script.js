console.log("hallo");
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let bird = new Bird(300, 400, 1, 1, 1, 1, ctx);

  function startGame() {
    updateCanvas();
  }

  function updateCanvas() {
    backgroundImage.move();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImage.draw();
    bird.draw();

    setInterval(updateCanvas, 100 / 50);
  }

  document.onkeydown = function(e) {
    if (e.keyCode === 32) {
      console.log("yay i space");
      bird.moveUp();
      bird.draw();
    }
  };

  //bird stuff
  //information bird

  //canvas bird

  //background image
  var imgBackground = new Image();
  imgBackground.src = "./images/bg.png";

  var backgroundImage = {
    img: imgBackground,
    x: 0,
    speed: -0.003,

    move: function() {
      this.x += this.speed;
      this.x %= canvas.width;
    },

    draw: function() {
      // console.log(this.x, this.img.width);
      ctx.drawImage(this.img, this.x, 0);
      if (this.speed < 0) {
        ctx.drawImage(this.img, this.x + canvas.width, 0);
      } else {
        ctx.drawImage(this.img, this.x - this.img.width, 0);
      }
    }
  };
};
