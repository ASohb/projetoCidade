var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var predio1 = createSprite(30, 400, 40, 500);
predio1.shapeColor="gray";

var predio2 = createSprite(80, 400, 40, 260);
predio2.shapeColor="gray";

var predio3 = createSprite (130, 400, 40, 350);
predio3.shapeColor="gray";

var predio4 = createSprite(180, 400, 40, 615);
predio4.shapeColor="gray";

var predio5 = createSprite(230, 400, 40, 295);
predio5.shapeColor="gray";

var predio6 = createSprite(280, 400, 40, 200);
predio6.shapeColor="gray";

var predio7 = createSprite(330, 400, 40, 165);
predio7.shapeColor="gray";


function draw() {
  background("skyblue");
  drawSprites();
  
  //PREDIO 1 
  
  //porta predio 1
  fill("#964b00");
  rect (25.5, 385, 8, 17);
  //primeiro andar predio 1
  fill("white");
  rect(15, 370, 8, 8);
  rect(35, 370, 8, 8);
  //segundo andar predio 1
  rect(15, 355, 8, 8);
  rect(35, 355, 8, 8);
  //terceiro andar predio 1
 rect(15, 340, 8, 8);
  rect(35, 340, 8, 8);
  //quarto andar predio 1
  rect(15, 325, 8, 8);
  rect(35, 325, 8, 8);
  //quinto andar predio 1
  rect(15, 310, 8, 8);
  rect(35, 310, 8, 8);
  //sexto andar predio 1
  rect(15, 295, 8, 8);
  rect(35, 295, 8, 8);
  //setimo andar predio 1
  rect(15, 280, 8, 8);
  rect(35, 280, 8, 8);
  //oitavo andar predio 1
  rect(15, 265, 8, 8);
  rect(35, 265, 8, 8);
  //nono andar predio 1
  rect(15, 250, 8, 8);
  rect(35, 250, 8, 8);
  //decimo andar predio 1
  rect(15, 235, 8, 8);
  rect(35, 235, 8, 8);
  //decimo primeiro andar predio 1
  rect(15, 220, 8, 8);
  rect(35, 220, 8, 8);
  //decimo segundo andar predio 1
  rect(15, 205, 8, 8);
  rect(35, 205, 8, 8);
  //decimo terceiro andar predio 1
  rect(15, 190, 8, 8);
  rect(35, 190, 8, 8);
  //decimo quarto andar predio 1
  rect(15, 175, 8, 8);
  rect(35, 175, 8, 8);
  //decimo quinto andar predio 1
  rect(15, 160, 8, 8);
  rect(35, 160, 8, 8);
  
  //PREDIO 2
  
  //porta predio 2
  fill("#964b00");
  rect (75, 385, 8, 17);
  //primeiro andar predio 2
  fill("white");
  rect(65, 370, 8, 8);
  rect (85, 370, 8, 8);
  //segundo andar predio 2
  rect(65, 355, 8, 8);
  rect (85, 355, 8, 8);
  //terceiro andar predio 2
  rect(65, 340, 8, 8);
  rect (85, 340, 8, 8);
  //quarto andar predio 2
  rect(65, 325, 8, 8);
  rect(85, 325, 8, 8);
  //quinto andar predio 2
  rect(65, 310, 8, 8);
  rect(85, 310, 8, 8);
  //sexto andar predio 2
  rect(65, 295, 8, 8);
  rect(85, 295, 8, 8);
  //setimo andar predio 2
  rect(65, 280, 8, 8);
  rect(85, 280, 8, 8);
  
  //PREDIO 3
  //porta predio 3
  fill("#964b00");
  rect(124.5, 385, 8, 17);
  //primeiro andar predio 3
  fill("white");
  rect(115, 370, 8, 8);
  rect(135, 370, 8, 8);
  //segundo andar predio 3
  rect(115, 355, 8, 8);
  rect (135, 355, 8, 8);
  //terceiro andar predio 3
  rect(115, 340, 8, 8);
  rect(135, 340, 8, 8);
  //quarto andar predio 3
  rect(115, 325, 8, 8);
  rect(135, 325, 8, 8);
  //quinto andar predio 3
  rect(115, 310, 8, 8);
  rect(135, 310, 8, 8);
  //sexto andar predio 3
  rect(115, 295, 8, 8);
  rect(135, 295, 8, 8);
  //setimo andar predio 3
  rect(115, 280, 8, 8);
  rect(135, 280, 8, 8);
  //oitavo andar predio 3
  rect(115, 265, 8, 8);
  rect(135, 265, 8, 8);
  //nono andar predio 3
  rect(115, 250, 8, 8);
  rect(135, 250, 8, 8);
  //decimo andar predio 3
  rect(115, 235, 8, 8);
  rect(135, 235, 8, 8);
  
  //PREDIO 4
  
  //porta predio 4
  fill("#964b00");
  rect(174, 385, 8, 17);
  //primeiro andar predio 4
  fill("white");
  rect(165, 370, 8, 8);
  rect(185, 370, 8, 8);
  //segundo andar predio 4
  rect(165, 355, 8, 8);
  rect(185, 355, 8, 8);
  //terceiro andar predio 4
  rect(165, 340, 8, 8);
  rect(185, 340, 8, 8);
  //quarto andar predio 4
  rect(165, 325, 8, 8);
  rect(185, 325, 8, 8);
  //quinto andar predio 4
  rect(165, 310, 8, 8);
  rect(185, 310, 8, 8);
  //sexto andar predio 4
  rect(165, 295, 8, 8);
  rect(185, 295, 8, 8);
  //setimo andar predio 4
  rect(165, 280, 8, 8);
  rect(185, 280, 8, 8);
  //oitavo andar predio 4
  rect(165, 265, 8, 8);
  rect(185, 265, 8, 8);
  //nono andar predio 4
  rect(165, 250, 8, 8);
  rect(185, 250, 8, 8);
  //decimo andar predio 4
  rect(165, 235, 8, 8);
  rect(185, 235, 8, 8);
  //decimo segundo andar predio 4
  rect(165, 220, 8, 8);
  rect(185, 220, 8, 8);
  //decimo terceiro andar predio 4
  rect(165, 205, 8, 8);
  rect(185, 205, 8, 8);
  //decimo quarto andar predio 4
  rect(165, 190, 8, 8);
  rect(185, 190, 8, 8);
  //decimo quinto andar predio 4
  rect(165, 175, 8, 8);
  rect(185, 175, 8, 8);
  //decimo sexto andar predio 4
  rect(165, 160, 8, 8);
  rect(185, 160, 8, 8);
  //decimo setimo andar predio 4
  rect(165, 145, 8, 8);
  rect(185, 145, 8, 8);
  //decimo oitavo andar predio 4
  rect(165, 130, 8, 8);
  rect(185, 130, 8, 8);
  //decimo nono andar predio 4
  rect(165, 115, 8, 8);
  rect(185, 115, 8, 8);
  //vigesimo andar predio 4
  rect(165, 100, 8, 8);
  rect(185, 100, 8, 8);
  
  //PREDIO 5
  
  //porta predio 5
  fill("#964b00");
  rect(225, 385, 8, 17);
  //primeiro andar predio 5
  fill("white");
  rect(215, 370, 8, 8);
  rect(235, 370, 8, 8);
  //segundo andar predio 5
  rect(215, 355, 8, 8);
  rect(235, 355, 8, 8);
  //terceiro andar predio 5
  rect(215, 340, 8, 8);
  rect(235, 340, 8, 8);
  //quarto andar predio 5
  rect(215, 325, 8, 8);
  rect(235, 325, 8, 8);
  //quinto andar predio 5
  rect(215, 310, 8, 8);
  rect(235, 310, 8, 8);
  //sexto andar predio 5
  rect(215, 295, 8, 8);
  rect(235, 295, 8, 8);
  //setimo andar predio 5
  rect(215, 280, 8, 8);
  rect(235, 280, 8, 8);
  //oitavo andar predio 5
  rect(215, 265, 8, 8);
  rect(235, 265, 8, 8);
  
  //PREDIO 6
  
  //porta predio 6
  fill("#964b00");
  rect (275, 385, 8, 17);
  //primeiro andar predio 6
  fill ("white");
  rect(265, 370, 8, 8);
  rect(285, 370, 8, 8);
  //segundo andar predio 6
  rect(265, 355, 8, 8);
  rect(285, 355, 8, 8);
  //terceiro andar predio 6
  rect(265, 340, 8, 8);
  rect(285, 340, 8, 8);
  //quarto andar predio 6
  rect(265, 325, 8, 8);
  rect(285, 325, 8, 8);
  //quinto andar predio 6
  rect(265, 310, 8, 8);
  rect(285, 310, 8, 8);
  
  //PREDIO 7
  
  //porta predio 6
  fill("#964b00");
  rect (324.5, 385, 8, 17);
  //primeiro andar predio 7
  fill("white");
  rect(315, 370, 8, 8);
  rect(335, 370, 8, 8);
  //segundo andar predio 7
  rect(315, 355, 8, 8);
  rect(335, 355, 8, 8);
  //terceiro andar predio 7
  rect(315, 340, 8, 8);
  rect(335, 340, 8, 8);
  //quarto andar predio 7
  rect(315, 325, 8, 8);
  rect(335, 325, 8, 8);
  
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
