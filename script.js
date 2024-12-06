'use strict';
//    const randomGenNum = function() {Number(Math.floor(Math.random()*5 + 1))
//     console.log(typeof randomGenNum(), randomGenNum());}
   
    function randomNum (){
        return(Number(Math.floor(Math.random()*3 + 1)));
    }
    document.querySelector(".check").addEventListener("click",function(){
        console.log(randomNum());
    });

    let i = 1;
    let randomGenNum = randomNum();


document.querySelector(".check").addEventListener("click", function () {
    const userGuess = Number(document.querySelector(".guess").value);
    if(userGuess === randomGenNum){
        document.querySelector(".message").textContent="You guessed it RIGHT";
        document.querySelector("h1").textContent="GOOD JOB";
            document.querySelector(".number").textContent= randomGenNum;
            document.querySelector(".score").textContent=i++;
            let scoreOnly = document.querySelector(".score").textContent;
            document.querySelector(".highscore").textContent=scoreOnly;
            document.body.style.backgroundColor="blue";
            setTimeout(function(){
            resetGame();
        }, 2000);
    } 
    else if(userGuess > 3 || userGuess < 1){
        resetGame();
        alert("select the number between 1 to 3");
        document.querySelector(".message").textContent="please choose number Between 1 to 3";
        document.querySelector(".number").textContent="??";
        document.querySelector("h1").textContent="choose your NUMBER,";
    }

    else{
        document.querySelector(".message").textContent="WRONG, choose another Number";
        document.body.style.backgroundColor="red";
        document.querySelector(".number").textContent="❌";
        document.querySelector("h1").textContent="WRONG";

        setTimeout(function(){
            resetGame();
            document.querySelector("h1").textContent="Try Again! My number is, ";
            document.querySelector(".number").textContent= randomNum();
        }, 1500);
    }
})

document.querySelector(".again").addEventListener("click", function(){
    location.reload();
})


const resetGame = function(){
    document.body.style.backgroundColor="black";
    document.querySelector(".message").textContent="The game has started";
    document.querySelector(".guess").value = ""; 
    randomGenNum = randomNum();
}
