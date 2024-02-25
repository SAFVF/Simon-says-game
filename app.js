let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","green","blue"]
let start = false;
let level = 0;
let h2 = document.querySelector("h2")
document.addEventListener("keypress", function(){
    if(start == false){
        console.log("Game started")
        start = true;

        levelUp();
    }
})
function randmFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000)
        }
    }
    else{
       h2.innerHTML = `You lose and your score is <b>${level}<b><br> Press any key to start.`;
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
       },150) 
       reset();
    }
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = (`Level ${level}`);
    let randmIdx = Math.floor(Math.random()*3);
    let randmColor = btns[randmIdx];
    let randmBtn = document.querySelector(`.${randmColor}`);
    gameSeq.push(randmColor);
    randmFlash(randmBtn);
}

function btnPress(){
    let btn = this;
    randmFlash(btn);
    userColour = btn.getAttribute("id");
    userSeq.push(userColour);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    start = false;
    gameSeq = []
    userSeq = []
    level = 0
}