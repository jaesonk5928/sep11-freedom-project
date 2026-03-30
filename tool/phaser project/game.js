var config = {
  width: 800,
  height: 600,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2]
  type: Phaser.AUTO,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 300 },
        debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);
