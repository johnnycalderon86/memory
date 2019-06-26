const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false;
let firstCard, secondCard;
const keyPressed = document.getElementsByClassName('memory-game')

let keyDown;
let keyUP;
let keyLeft;
let keyRight;


function flipCard(){
    
    this.classList.add('flip');
   
    if(!hasFlippedCard){
        //first click
        hasFlippedCard = true;
        firstCard = this;

    } else{
        //second click
        hasFlippedCard = false;
        secondCard = this;
        //do cards match?
        if (firstCard.dataset.framework === secondCard.dataset.framework){
         //   is it a match?
         firstCard.removeEventListener('click', flipCard);
         secondCard.removeEventListener('click', flipCard);
        }else{
            //not a match
            setTimeout(() => {
                 firstCard.classList.remove('flip');
                 secondCard.classList.remove('flip');
            }, 2000);
           

        }
    
    }

}

(function shuffel(){
    cards.forEach(card =>{
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    });
})();


cards.forEach(card =>card.addEventListener('click', flipCard));



