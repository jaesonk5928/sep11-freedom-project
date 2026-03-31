class Scene1 extends Phaser.Scene {
  constructor() {
    super("bootGame");
  }

  preload(){
    this.load.image('background', 'assets/images/back.png');
    this.load.image('ground', 'assets/images/ground.png');
    this.load.image('error', 'assets/images/danger.png');
  }

  create() {
    const back = this.add.image(800, 300, 'background');
    const ground = this.add.image(100, 200, 'ground');
    // this.add.image(800, 300, 'error');

    back.scale = 2.8;
    powering.scale = 0.25;

  }

  update () {

  }
}



