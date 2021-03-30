// Get buttons from HTML
const btnstart = document.getElementById("start");
const btnstop = document.getElementById("stop");
const btnrestart = document.getElementById("restart");

// Get progress backgroundColor
const elem = document.getElementById("myBar");

// Get volume controls
const vfull = document.getElementById("full");
const vlow = document.getElementById("low");
const vlower = document.getElementById("lower");
const vmute = document.getElementById("mute");

// Get audio files 
const music1 = new Audio('beep.wav');
const music2 = new Audio('paper.wav');
const music3 = new Audio('alarm.wav');

// Get minutes and seconds from HTML
const minut = document.getElementById("min");
const second = document.getElementById("sec");

// Variables that get to change in the functions
let n = 1;
let m = 0;
let z = 3;
let zl = 0;
let h = 0;

// constant ZERO
const zero = 0;

// Seconds function
const bee = () => {
 if (z == 4){return};
    const muu = () => {
        if (zl > 9){return};
        if (z == 4){return};
        sound();
        m = n++;
        if (m > 59){min()};
        console.log(`sec`,m);
        second.innerHTML = second.innerHTML.replace(m-1,m);
        move();
    }
    setTimeout( () => { muu()},1000 );
    setTimeout( () => { bee()},1000 );
}

// Minutes function
const min = () => {
zl++;
console.log(`min`,zl);
minut.innerHTML = minut.innerHTML.replace(zl-1,zl);
second.innerHTML = second.innerHTML.replace("59","0");
n = 1;
}

// Color progres function
function move() {
  let id = setInterval(frame, 1);
  function frame() {
      if(m == 60){m = 0};
      h = m + (zl * 60);                        
      elem.style.height = (h * 0.1667) + "%";
      if(h < 60){
        elem.style.backgroundColor = (`#1d59ff`);  // 1s
      } else if(h >= 60 && h < 120){
        elem.style.backgroundColor = (`#68c4fa`);  // 2s
      } else if(h >= 120 && h < 180){
        elem.style.backgroundColor = (`#68faf0`);  // 3s
      } else if(h >= 180 && h < 240){
        elem.style.backgroundColor = (`#68fab7`);  // 4s
      } else if(h >= 240 && h < 300){
        elem.style.backgroundColor = (`#4CAF50`);  // 5s
      } else if(h >= 300 && h < 360){
        elem.style.backgroundColor = (`#a5fa68`);  // 6s
      } else if(h >= 360 && h < 420){
        elem.style.backgroundColor = (`#900080`);  // 7s
      } else if(h >= 420 && h < 480){
        elem.style.backgroundColor = (`#e9fa68`);  // 8s
      } else if(h >= 480 && h < 540){
        elem.style.backgroundColor = (`#ff6969`);  // 9s
      } else if(h >= 540 && h < 600){
        elem.style.backgroundColor = (`#faa668`);  // 10s
      } else {
        elem.style.backgroundColor = (`#ff0000`);  // fin
      }
  }
}

// Sound function
const sound = () => {
  if(h == 599){
    music3.play();
  } else if(h == 59 || h == 119 || h == 179 || h == 239 || h == 299 || h == 359 || h == 419 || h == 479 || h == 539){ 
    music2.play();
  } else {music1.play();}
}

// Stop function
const stop = () => {
z = 4;
}

// Start function
const start = () => {
if (z == 3 && m > 0){      // for seconds function to start only once
  return;
} else {
  z = 3;
  bee();
}
}

// Restart functions
const restart = () => {  
stop();
setTimeout( () => { rest()},0 ); 
n = 1;
}

const rest = () => {
  resta();
  if(m > 0){
   second.innerHTML = second.innerHTML.replace(m, zero);
  }
  m = 0;
}  

const resta= () => {  
  if(zl >= 0){
   minut.innerHTML = minut.innerHTML.replace(zl, zero);
  }
  zl = 0;
  move();  // because everything is reset, starting progres function again will reset progress as well
}

// Volume functions
const volumeFull = () => {
  music1.volume = 1.0;
  music2.volume = 1.0;
  music3.volume = 1.0;
}

const volumeLow = () => {
  music1.volume = 0.6;
  music2.volume = 0.6;
  music3.volume = 0.6;
}

const volumeLower = () => {
  music1.volume = 0.2;
  music2.volume = 0.2;
  music3.volume = 0.2;
}

const volumeMute = () => {
  music1.volume = 0.0;
  music2.volume = 0.0;
  music3.volume = 0.0;
}

// Buttons Event Listener
btnstart.addEventListener("click", start)
btnstop.addEventListener("click", stop)
btnrestart.addEventListener("click", restart)

// Volume Event Listener
vfull.addEventListener("click", volumeFull)
vlow.addEventListener("click", volumeLow)
vlower.addEventListener("click", volumeLower)
vmute.addEventListener("click", volumeMute)
