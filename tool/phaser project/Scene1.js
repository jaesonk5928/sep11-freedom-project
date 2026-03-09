class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }


preload(){
    this.load.image("background", "assets/images/darkBg.png");
    this.load.image("player", "assets/images/stickman.png");
  }

  create() {
    this.add.text(20, 20, "Loading game...");
    this.scene.start("playGame");
    this.add.image(400, 300, 'background');
  }
}

class Scene2 extends Phaser.Scene{
  constructor(){
    super("playGame");
}

  create(){
    // this.add.text(20, 20, "Game", {font: "25px Arial", fill: "yellow"});
    const bigBg = this.add.image(400, 350, "background");
    const player = this.add.image(400, 350, "player");
    player.setScale(0.04)
    bigBg.setScale(2.15);
  }
}

  let charX = 100;
  let charY = 150;
const speed = 5;

const keys = {};

  player.onload = () => {
    requestAnimationFrame(update);
  };

  window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
  });

  window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
  });

  function update() {
    if (keys['ArrowUp']) charY -= speed;
    if (keys['ArrowDown']) charY += speed;
    if (keys['ArrowLeft']) charX -= speed;
    if (keys['ArrowRight']) charX += speed;

}



