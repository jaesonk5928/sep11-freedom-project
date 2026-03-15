# Entry 4
##### 3/13/26

### Content
When writing **Blog 3**, I've been watching this [video](https://www.youtube.com/watch?v=C3a9hArGa_E). Right after writing **Blog 3**, I watched more of the video from **these** specific _minutes_ time frame -> _**6:20**_ - _**10:25**_. The summary of this part of the video:
* 6:20 - 10:25
  * The guy in the video teaches us how to upload the **game assests** and load it in our code using `this.add.image()` for loading images, while `this.load.spritesheet()` is similar, but it's for spritesheets.

To give a definition, images are just for "aesthetics", while spritesheets are about moving images for player funtions.

We've completed these video tasks so far (almost 1/3 of the way done from learning):
```md
Project Task List
~~ - [ ] download & setup project template ~~
~~ - [ ] update game configuration ~~
~~ - [ ] load in assets ~~
- [ ] draw game board
- [ ] draw game pieces
- [ ] interact with game pieces and toggle frames
- [ ] create basic tic tac toe class
- [ ] handle players making a move
- [ ] add getters to tic tac toe class
- [ ] connect tic tac toe class to phaser scene
```

Some **code snippets** about loading in both images & spritesheets:
```js
preload(){
    this.load.image("background", "assets/images/darkBg.png");
    this.load.image("player", "assets/images/stickman.png");
}
```
This uses the `preload()` function to "load" in the images in my webpage.
```js
create(){
    const bigBg = this.add.image(400, 350, "background");
    const player = this.add.image(400, 350, "player");
    player.setScale(0.04)
    bigBg.setScale(2.15);
}
```
This uses the `create()` function to actually show the "loaded" images in my scene.
These code snippets are from my Freedom Project and this is what I am currently doing.

### EDP (Engineering Design Process)
Now that I am writing my 4th **blog entry**, I am currently on Step 2 of the EDP: "**Researching the Problem**". Currently im at the 3rd step of the _Engineering Design Process_: "**Brainstorm Possible Solution(s)**". I came up with some solutions that could possibly help with social **safety**. The problem with texting people you know little could pose a dangerous harm to your "account". I would change it so that you have to do a "**double check**" thing to people you don't trust.


[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)
