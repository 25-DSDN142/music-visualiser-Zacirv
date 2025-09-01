let sqY = 350;
let sqSize = 5;

function draw_one_frame(words,vocal,drum,bass,other,counter) {
colorMode(HSB,100);
background(50,50);

sqSize = map(drum, 0, 100, 50, 1);

let Yellow = color(20,160,100);
let red = color(0,150,10);

let lerpAmt = map(bass,0,100,0,1.5);
let changingColor = lerpColor(Yellow,red,lerpAmt);

fill(changingColor);

for(let i = 0; i <5; i++ ){
rect(300, sqY + (100 * i), sqSize)
}

}