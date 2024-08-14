const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');
function jump(){
    if(dispatchEvent.classList != "jump"){
        dino.classList.add("jump");
        setTimeout(function(){
            dino.classList.remove("jump");
        },300)
    }
}
let checkAlive =setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusLeft > 0 && cactusLeft <70 && dinoTop >=145){
        dino.style.animationPlaystate = 'paused';
        cactus.style.animationPlayState = 'paused';
        alert("Whoops! Game Over :(");
        window.location.reload();
    }
}, 10);
document.addEventListener("keydown", function(event){
    jump();
})