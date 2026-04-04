var config = {
  width: 1200,
  height: 1200,
  backgroundColor: 0x000000,
  physics: {
    default: 'arcade',
      arcade: {
        gravity: { y: 300 },
          debug: false
      }
  },
      scene: [Scene1]
};

var game = new Phaser.Game(config);
