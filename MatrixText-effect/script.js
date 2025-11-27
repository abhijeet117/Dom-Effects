let p = document.querySelector("p");
let chracter = "ABCDEFGHIJKLMNOPRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let pText = p.innerText;

p.addEventListener('mouseover', function(){
    let str = pText.split("").map((val, index) => {
        return chracter.split("")[Math.floor(Math.random()* 51)]
    }).join("");

    p.innerText = str;
})