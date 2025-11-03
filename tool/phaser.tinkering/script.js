// var config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     backgroundColor: 0x000000,
// }
//     // scene: {
//     //     preload: preload,
//     //     create: create,
//     //     update: update,
//     // }


// var game = new Phaser.Game(config);

// function preload ()
// {
// }

// function create ()
// {
//     this.add.image(400, 300, 'sky');
//     this.add.image(400, 300, 'star');
// }

// function update ()
// {
// }

var config = {

  width: 1850,
  height: 900,
  backgroundColor: 0x000000,
  scene: [Scene1, Scene2]

}


var game = new Phaser.Game(config);
