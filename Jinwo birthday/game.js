let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", function(){
    window.location.href = "https://itzrajyavardhan-lab.github.io/Truth--and-Dare-/";
});

noBtn.addEventListener("mouseover", function(){
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});
