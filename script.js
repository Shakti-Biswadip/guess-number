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
        document.querySelector(".message").innerHTML="You guessed it RIGHT";
            document.querySelector(".number").innerHTML= randomGenNum;
            document.querySelector(".score").innerHTML=i++;
            let scoreOnly = document.querySelector(".score").innerHTML;
            document.querySelector(".highscore").innerHTML=scoreOnly;
            document.body.style.backgroundColor="blue";
            setTimeout(function(){
            resetGame();
        }, 1500);
    } 
    else if(userGuess > 3 || userGuess < 1){
        resetGame();
        alert("select the number between 1 to 3");
        document.querySelector(".message").innerHTML="please choose number Between 1 to 3";
        document.querySelector(".number").innerHTML="??";
        document.querySelector("h1").innerHTML="choose your NUMBER,";
    }

    else{
        document.querySelector(".message").innerHTML="WRONG, choose another Number";
        document.body.style.backgroundColor="red";
        document.querySelector(".number").innerHTML="❌";

        setTimeout(function(){
            resetGame();
            document.querySelector("h1").innerHTML="Try Again! My number is, ";
            document.querySelector(".number").innerHTML= randomNum();
        }, 1500);
    }
})

document.querySelector(".again").addEventListener("click", function(){
    location.reload();
})


const resetGame = function(){
    document.body.style.backgroundColor="black";
    document.querySelector(".message").innerHTML="The game has started";
    document.querySelector(".guess").value = ""; 
    randomGenNum = randomNum();
}

