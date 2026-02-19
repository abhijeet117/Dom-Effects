let envelope = document.getElementById("envelope");
let cardStage = document.getElementById("cardStage");
let confettiLayer = document.getElementById("confettiLayer");
let nextBtn = document.getElementById("nextBtn");
let letterImg = document.querySelector(".letter img");

let hasOpened = false;
let cleanupTimer = null;

function createConfetti(){
    const colors = ["#ff2f76", "#ffb347", "#7ef6ff", "#b86bff", "#ffffff"];
    const count = window.innerWidth < 480 ? 12 : 24;
    for(let i = 0; i < count; i++){
        let piece = document.createElement("div");
        piece.className = "confetti";
        piece.style.left = Math.random() * 180 + 40 + "px";
        piece.style.top = Math.random() * 40 + 60 + "px";
        piece.style.background = colors[i % colors.length];
        piece.style.transform = "rotate(" + (Math.random() * 180) + "deg)";
        piece.style.animationDelay = "1.1s";
        confettiLayer.appendChild(piece);
    }

    clearTimeout(cleanupTimer);
    cleanupTimer = setTimeout(function(){
        confettiLayer.innerHTML = "";
    }, 2600);
}

function openCard(){
    if(hasOpened){
        return;
    }
    hasOpened = true;
    envelope.classList.add("open");
    cardStage.classList.add("blast");
    cardStage.classList.add("reveal");
    createConfetti();
}

function stopAnimation(){
    envelope.classList.remove("open");
    cardStage.classList.remove("blast");
    cardStage.classList.remove("reveal");
    confettiLayer.innerHTML = "";
    clearTimeout(cleanupTimer);
    envelope.style.pointerEvents = "none";
    envelope.setAttribute("aria-disabled", "true");
    hasOpened = true;
    if(letterImg){
        letterImg.style.animation = "none";
        letterImg.offsetHeight;
        letterImg.style.animation = "";
    }
}

envelope.addEventListener("click", openCard);
envelope.addEventListener("keydown", function(e){
    if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        openCard();
    }
});

nextBtn.addEventListener("click", function(){
    stopAnimation();
    window.location.href = "next-page.html";
});
