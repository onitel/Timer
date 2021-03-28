// Get buttons from HTML
const btnstart = document.getElementById("start");
const btnstop = document.getElementById("stop");
const btnrestart = document.getElementById("restart");

// Get minutes and seconds from HTML
const minut = document.getElementById("min");
const second = document.getElementById("sec");

// variables that get o change in the functions
let n = 1;
let m = 0;
let z = 3;
let zl = 0;

const zero = 0;

// Seconds function
const bee = () => {
 if (z == 4){return};
    const muu = () => {
        if (zl > 9){return};
        if (z == 4){return};
        m = n++;
        if (m > 59){min()};
        console.log(`sec`,m);
        second.innerHTML = second.innerHTML.replace(m-1,m);
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

// Stop function
const stop = () => {
z = 4;
}

// Start function
const start = () => {
if (z == 3 && m > 0){
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
}  

const resta= () => {  
  if(zl >= 0){
   minut.innerHTML = minut.innerHTML.replace(zl, zero);
  }
  zl = 0;
}

// Buttons Event Listener
btnstart.addEventListener("click", start )
btnstop.addEventListener("click", stop )
btnrestart.addEventListener("click", restart)