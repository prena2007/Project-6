var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e7f799b8-b26a-4ad9-a654-9f11d2b07bcd","e1fc49fc-37d0-4106-a649-72ac25bf8751","cabf024a-6f82-4f60-ae4e-724e16927b64"],"propsByKey":{"e7f799b8-b26a-4ad9-a654-9f11d2b07bcd":{"name":"diamond1","sourceUrl":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png","frameSize":{"x":400,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dmHXimVUN6NkkgGu6Ojoow2mldVDI2ai/category_video_games/gameplay_purplediamond.png"},"e1fc49fc-37d0-4106-a649-72ac25bf8751":{"name":"thief","sourceUrl":"assets/api/v1/animation-library/gamelab/t44eFFNKurL6603QnBdIgqQ0CWopoOaC/category_people/grey_shirt2.png","frameSize":{"x":143,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"t44eFFNKurL6603QnBdIgqQ0CWopoOaC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":143,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/t44eFFNKurL6603QnBdIgqQ0CWopoOaC/category_people/grey_shirt2.png"},"cabf024a-6f82-4f60-ae4e-724e16927b64":{"name":"bg","sourceUrl":"assets/api/v1/animation-library/gamelab/G3QUkZJLzAaDQWW4w_4.lj3NzFAn2qFi/category_backgrounds/gradient.png","frameSize":{"x":400,"y":354},"frameCount":1,"looping":true,"frameDelay":2,"version":"G3QUkZJLzAaDQWW4w_4.lj3NzFAn2qFi","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":354},"rootRelativePath":"assets/api/v1/animation-library/gamelab/G3QUkZJLzAaDQWW4w_4.lj3NzFAn2qFi/category_backgrounds/gradient.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg= createSprite(400,400,800,800);
bg.setAnimation("bg");
bg.scale=2.3;

var diamond= createSprite(380,20,20,20);
diamond.setAnimation("diamond1");
diamond.scale=0.1;
var thief= createSprite(10,385,40,40);
thief.setAnimation("thief");
thief.scale=0.15;
var lazer1= createSprite(100,100,200,5);
lazer1.shapeColor="black";
var lazer2= createSprite(300,300,200,5);
lazer2.shapeColor="black";

function draw() {
  drawSprites()
  
  createEdgeSprites()
  
  if (keyDown("ENTER")){
    lazer1.velocityY= 2;
  }
  if (lazer1.y>300){
    lazer1.velocityY=-2;
  }
  if (lazer1.y<100){
    lazer1.velocityY=2;
  }
  if (keyDown("ENTER")){
    lazer2.velocityY= -2;
  }
  if (lazer2.y<100){
    lazer2.velocityY= 2;
  }
  if (lazer2.y>300){
    lazer2.velocityY=-2;
  }
  
  thief.collide(edges);
  
  if (keyWentDown("RIGHT_ARROW")){
    thief.velocityX= 2;
    thief.velocityY= 0;
  }
  if (keyWentUp("RIGHT_ARROW")){
    thief.velocityX= 0;
    thief.velocityY= 0;
  }
  if (keyWentDown("LEFT_ARROW")){
    thief.velocityX= -2;
    thief.velocityY= 0;
  }
  if (keyWentUp("LEFT_ARROW")){
    thief.velocityX= 0;
    thief.velocityY= 0;
  }
  if (keyWentDown("UP_ARROW")){
    thief.velocityX= 0;
    thief.velocityY= -2;
  }
  if (keyWentUp("UP_ARROW")){
    thief.velocityX= 0;
    thief.velocityY= 0;
  }
  if (keyWentDown("DOWN_ARROW")){
    thief.velocityX= 0;
    thief.velocityY= 2;
  }
  if (keyWentUp("DOWN_ARROW")){
    thief.velocityX= 0;
    thief.velocityY= 0;
  }
  if (thief.isTouching(lazer1)|| thief.isTouching(lazer2)){
    thief.velocityX= 0;
    thief.velocityY= 0;
    lazer1.velocityY=0;
    lazer2.velocityY=0;
    textSize(38);
    stroke("red");
    text("Thief is caught", 90, 200);
  }
  if (thief.isTouching(diamond)){
    thief.velocityX= 0;
    thief.velocityY= 0;
    lazer1.velocityY=0;
    lazer2.velocityY=0;
    textSize(38);
    stroke("red");
    text("Thief has won", 90, 200);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
