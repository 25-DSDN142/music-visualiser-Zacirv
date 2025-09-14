//paramaters
let sqY = 0;
let sqx = 0;
let cY = 0;
let cX = 0;
angleMode(DEGREES);

function draw_one_frame(words,vocal,drum,bass,other,counter) {
//setup
colorMode(HSB,100);
background(0,0);

//square setup
sqSize = map(drum, 0, 100, 100, 0);
let yellow = color(20,160,100);
let red = color(0,150,60);
let sqAmt = map(other,0,100,0,1.1);
let changingColor = lerpColor(red,yellow,sqAmt);
fill(changingColor);

//square stroke setup
strokeW = map(vocal, 0, 100, 0, 20);
strokeWeight(strokeW);
let blue = color(65, 50, 100);
let dBlue = color(65,50,20);
let stAmt =map(drum,0,100,0,1);
let strokeCol = lerpColor(dBlue,blue,stAmt);
stroke(strokeCol);

//ellipse setup
cSize = map(bass, 0, 100, 100, 0)
let lGreen = color(33,10,100);
let green = color(33,100,100);
let cAmt = map(drum,0,100,0,1);
let cCol = lerpColor(lGreen,green,cAmt);

//ellipses 
push();
stroke(vocal)
strokeWeight(1)
fill(cCol);
//left row
for(let i = 0; i <2; i++ ){
ellipse(cX+50, cY+100 + (400 * i), cSize, 20)
    }
//mid row 1
  for(let i = 0; i <2; i++ ){
ellipse(cX+250, cY+300 + (400 * i), cSize, 20)
    }
//mid row 2
    for(let i = 0; i <2; i++ ){
ellipse(cX+450, cY+100 + (400 * i), cSize, 20)
    }
//right row
    for(let i = 0; i <2; i++ ){
ellipse(cX+650, cY+300 + (400 * i), cSize, 20)
    }
pop();

//little squares
push()
fill(80, 100, 100)
stroke(vocal)
strokeWeight(1)
let lX = map(vocal,0,100,0,100)
rect(lX+100, 195, 30, 10)
rect(-lX+170, 595, 30, 10)


rect(lX+500, 595, 30, 10)
rect(-lX+570, 195, 30, 10)



pop()
//squares
push();
//T_left
for(let i = 0; i <4; i++ ){
rect(sqx, sqY + (200 * i), sqSize)
  
}
//T_mid1
for(let i = 0; i <4; i++ ){
rect(200, sqY + (200 * i), sqSize)
}
//T_mid2
for(let i = 0; i <4; i++ ){
rect(400, sqY + (200 * i), sqSize)
}
//T_right
for(let i = 0; i <4; i++ ){
rect(600, sqY + (200 * i), sqSize)
}
//B_right
for (let i = 0; i < 10; i++) {
  rect(width - sqSize - 500, sqY + 100 + (200 * i), sqSize, sqSize);
}
//B_mid
for (let i = 0; i < 10; i++) {
  rect(width - sqSize - 300, sqY + 100 + (200 * i), sqSize, sqSize);
}
//B_left
for (let i = 0; i < 10; i++) {
  rect(width - sqSize - 100, sqY + 100 + (200 * i), sqSize, sqSize);
}
// R_T 
for (let i = 0; i < 4; i++) {
  rect(width - sqSize - (200 * i), height -600 - sqSize, sqSize, sqSize);
}
// R_M1
for (let i = 0; i < 4; i++) {
  rect(width - sqSize - (200 * i), height -400 - sqSize, sqSize, sqSize);
}
// R_M2
for (let i = 0; i < 4; i++) {
  rect(width - sqSize - (200 * i), height -200 - sqSize, sqSize, sqSize);
}
// R_B
for (let i = 0; i < 4; i++) {
  rect(width - sqSize - (200 * i), height - sqSize, sqSize, sqSize);
}
//R2_T
for (let i = 0; i < 3; i++) {
rect ((200 * i)+100, height-700 - sqSize, sqSize, sqSize);
}
//R2_M1
for (let i = 0; i < 3; i++) {
rect ((200 * i)+100, height-500 - sqSize, sqSize, sqSize);
}
//R2_M2
for (let i = 0; i < 3; i++) {
rect ((200 * i)+100, height-300 - sqSize, sqSize, sqSize);
}
//R2_B
for (let i = 0; i < 3; i++) {
rect ((200 * i)+100, height-100 - sqSize, sqSize, sqSize);
}
pop();

}