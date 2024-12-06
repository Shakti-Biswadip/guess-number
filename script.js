/* method 2 */
const secretNum = Math.floor(Math.random()*3)+1;
let userScore = 0;

//body color modify
const bodyGreen = function(){
    document.body.style.backgroundColor="green";
}
const bodyRed = function(){
    document.body.style.backgroundColor="red";
}

console.log(secretNum);

document.querySelector(".check").addEventListener("click", function(){
    const guessNumber = Number(document.querySelector(".guess").value);
    console.log(typeof guessNumber, guessNumber)

    if(!guessNumber){
        document.querySelector(".message").textContent="No NUMBER"
    }

    else if(guessNumber === secretNum) {
        document.querySelector(".message").textContent="Correct NUMBER";
        userScore++;
        document.querySelector(".score").textContent = userScore;
        setTimeout(function(){
            bodyGreen();
            document.querySelector(".number").textContent=secretNum;
            }, 400);
    }

    else if(guessNumber > secretNum) {
        if(userScore > 0){
        document.querySelector(".message").textContent="too high";
        userScore--;
        document.querySelector(".score").textContent = userScore;
        setTimeout(function(){
            bodyRed();
            document.querySelector(".number").textContent=secretNum;
            }, 400);
        } 
        else {
        document.querySelector(".message").textContent="you lost the GAME";
        document.body.style.backgroundColor="purple";
        document.querySelector(".number").textContent=0;
        }
    }

    else if(guessNumber < secretNum) {
        if(userScore > 0){
        document.querySelector(".message").textContent="too low";
        userScore--;
        document.querySelector(".score").textContent = userScore;
        setTimeout(function(){
            bodyRed();
            document.querySelector(".number").textContent=secretNum;
            }, 400);
        }
        else {
            document.querySelector(".message").textContent="you lost the GAME";
            document.body.style.backgroundColor="purple";
            document.querySelector(".number").textContent=0;
        }
    }

    else if(guessNumber > 3 || guessNumber < 0) {
        document.querySelector(".message").textContent="PLEASE select NUM 1 to 3";
        document.querySelector(".number").textContent=secretNum;
    }

})

document.querySelector(".again").addEventListener("click", function(){
    document.body.style.backgroundColor="white";
    document.querySelector("h1").textContent="NEW GAME.....";
    document.querySelector(".number").textContent="0";
    document.body.style.color="black";
    setTimeout(function(){
    location.reload();    
    }, 2000);
    
})
