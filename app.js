let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "blue" , "green" , "red"];

let Started = false;
let Level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(Started == false){
       console.log("game is started");
       Started = true;
    }
    levelUp();
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
       btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
       btn.classList.remove("userflash");
    }, 250);
}


function levelUp() {
    userSeq = [];
    Level++;
    h2.innerText = `Level ${Level}`;
    
    let rndIdx = Math.floor(Math.random() * 3);
    let rndColor = btns[rndIdx];
    let rndBtn = document.querySelector(`.${rndColor}`);
    gameSeq.push(rndColor);
    console.log(gameSeq);
    btnFlash(rndBtn);
}

function chechAns (Idx) {
    
    if(userSeq[Idx] === gameSeq[Idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp , 1000);
        }
    }else{
        h2.innerHTML = `Game over! Your score is <b> ${Level} </b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "#BCE7FD";
        } , 150);
        reset ();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    chechAns (userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset () {
    Started = false;
    gameSeq = [];
    userSeq = [];
    Level = 0;
}