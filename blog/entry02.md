# Entry 2
##### 12/15/25

### Content
The current tool that I am using and learning about is **Phaser**. Some ways I've been learning Phaser can consist of youtube videos like this [playlist](https://www.youtube.com/watch?v=a17P2A4Bgko&list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&index=12) that I'm almost done watching. It explains how to set up **Phaser** and what to expect. It goes step by step of how to create _multiple_ scenes, load spritesheets/images, physics, etc. Here is a **code snippet** of loading the ships in a scene:
```js
this.load.image("ship", "assets/images/ship.png");
this.load.image("ship2", "assets/images/ship2.png");
this.load.image("ship3", "assets/images/ship3.png");
```
Here is a code snippet that can animate the spaceship's movement:
```js
// makes the animation for the ships
this.anims.create({
    key: "ship1_anim",
    frames: this.anims.generateFrameNumbers("ship"),
    frameRate: 20,
    repeat: -1

// plays the animation for the ships
this.ship1.play("ship1_anim");
this.ship2.play("ship2_anim");
this.ship3.play("ship3_anim");
```

[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
