// event bubbling => jena pr click karisu aeni event chalu thase jo event listener nai maleto aena parent pr event listener find krse ane aena parent pr pn nai hoy to parent na parent pr event listener find krse and so on

var t1 = 60;
var score = 0;
var hitRN = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#score").textContent = score;
}
function decScore(){
    score -= 5;
    document.querySelector("#score").textContent = score;
}

function bubbleMake(){
    var clutter = "";
    for(var i = 1; i <= 168; i++){
        var rn = Math.floor(Math.random()*10);
        clutter += `<div id="bubble">${rn}</div>`;
        document.querySelector("#pBot").innerHTML = clutter;
    }
}

function randomHit(){
    hitRN = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent = hitRN;
}

function timer(){
    var time = setInterval(function(){
        if(t1 > 0){
            t1--;
            document.querySelector("#timer").textContent = t1;
            if(t1 <= 5){
                document.querySelector("#timer").style.color = "red";
            }
        }
        else{
            clearInterval(time);
            document.querySelector("#pBot").innerHTML = "<h1>Your Score "+"<span>"+score+"</span>"+"</h1>"+"<br>"+"<h2>Game Over</h2>"+"<br>"+"<P>Press ctrl+R to restart.</P>";
            document.querySelector("#hit").textContent = 0;
            document.querySelector("#pBot").style.pointerEvents = "none"
        }
    }, 1000);
}

document.querySelector("#pBot").addEventListener("click",function(chacha){
    var clicked = Number(chacha.target.textContent);
    if(hitRN === clicked){
        increaseScore();
        bubbleMake();
        randomHit();
    }
    else{
        decScore();
    }
})

timer();
randomHit();
bubbleMake();