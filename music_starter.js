
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
colorMode(HSB,100);
background(225);
rectMode(CENTER);
strokeWeight(9);
stroke(drum,80,80)
let drumMap = map(drum,0,100,30,90);
let lengthOfLine = 300;
let LineStart = 100;
let lineEnd = LineStart+lengthOfLine;

for(let i =1; i <= drumMap; i++){
   let lineStep = i*5;
   line(LineStart,lineStep,lineEnd,lineStep);




}

}