'use strict';
//    const randomGenNum = function() {Number(Math.floor(Math.random()*5 + 1))
//     console.log(typeof randomGenNum(), randomGenNum());}
   
    function randomNum (){
        return(Number(Math.floor(Math.random()*5 + 1)));
    }
    document.querySelector(".check").addEventListener("click",function(){
        console.log(randomNum());
    });
    let i = 1;
    

document.querySelector(".check").addEventListener("click", function(){
    document.body.style.backgroundColor="blue";
})

document.querySelector(".check").addEventListener("click", function () {
    if(randomNum() === Number((document.querySelector(".guess").value))){
        document.querySelector(".message").innerHTML="You guessed it RIGHT";
            setTimeout(function(){
                resetGame();
            }, 1500);
            document.querySelector(".number").innerHTML= randomNum();
            Number(document.querySelector(".score").innerHTML=i++);

    } 

    else if(document.querySelector(".guess").value > 5 ||document.querySelector(".guess").value < 1){
        alert("select the number between 1 to 5");
        document.querySelector(".number").innerHTML= randomNum();
        resetGame();
        document.querySelector(".number").innerHTML="??";
        document.querySelector(".message").innerHTML="please choose number Between 1 to 5"
    }

    else{
        document.querySelector(".message").innerHTML="WRONG, choose another Number";
        document.body.style.backgroundColor="red";
        document.querySelector(".number").innerHTML="❌";
        setTimeout(function(){
            resetGame();
        }, 1000);
    }
})

document.querySelector(".again").addEventListener("click", function(){
    location.reload();
})

if(randomNum() === Number((document.querySelector(".guess").value))){
    document.querySelector(".message").innerHTML="You guessed it RIGHT";
    location.reload();
} 

const resetGame = function(){
    document.body.style.backgroundColor="grey";
    document.querySelector(".message").innerHTML="The game has started"
}

