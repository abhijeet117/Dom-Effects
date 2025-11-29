let p = document.querySelector("p");
let chracter = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let pText = p.innerText;

let iteration = 0;

let animationStarted = false;

/* p.addEventListener('mouseover', function(){
    
    setInterval(() => {
        let str = pText.split("").map((val, index) => {

        if(index < interval){
            return val;
        }
        return chracter.split("")[Math.floor(Math.random()* 51)]
    }).join("");
    interval += 0.25;
    p.innerText = str;
    }, 30);

}) */

/* function randomText() {
    const str = pText.split("").map((val, index) => {
        if (index < iteration){
            return val;
        }

        return chracter.split("")[Math.floor(Math.random() *51)]
    }).join("")

    p.innerText = str;

    iteration += 0.25
}

setInterval(randomText, 300); */

function randomText() {
  p.innerText = pText
    .split("")
    .map(() => chracter.split("")[Math.floor(Math.random() * chracter.length)])
    .join("");
}
randomText();

function revealChar() {
  let str = pText
    .split("")
    .map((val, index) => {
      if (index < iteration) {
        return val;
      }
      return chracter.split("")[Math.floor(Math.random() * chracter.length)];
    })
    .join("");

  p.innerHTML = str;

  iteration += 0.25;
}

p.addEventListener("mousemove", function () {
  if (!animationStarted) {
    animationStarted = true;
    setInterval(revealChar, 30);
  }
});
