//challenge 1:Age in Days
function ageindays(){
var days = prompt('when were you born......Good friend');
var ageindays = (2019-days)*365;
var h1 = document.createElement('h1');
var answer = document.createTextNode('you are ' + ageindays + ' days old');
h1.appendChild(answer);
h1.setAttribute('id','result');
document.getElementById('result').appendChild(h1);
console.log(ageindays);
}

function reset(){
document.getElementById('result').remove();
}
//challenge 2:Cat Generator
function generatecat(){
    var image = document.createElement('img');
    image.src='http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    var div = document.getElementById('generateCat');
    div.appendChild(image);
}
//challenge 3:paper,scissor and rock
function rpsGame(yourChoice){
    var humanChoice,botChoice;

    botChoice = numberChoice(randrpsGame());
    console.log(botChoice);

    humanChoice = yourChoice.id;
    console.log(humanChoice);

    result = decideWinner(humanChoice,botChoice);
    console.log(result);

     message = finalMessage(result);
      console.log(message);

    rpsFrontEnd(humanChoice,botChoice,message);

}

function randrpsGame(){
    return Math.floor(Math.random() * 3);

}

function numberChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,botChoice){
var list = {
    'rock':{'paper':0,'rock':0.5,'scissors':1},
    'paper':{'scissors':0,'rock':1,'paper':0.5},
    'scissors':{'scissors':0.5,'rock':0,'paper':1}
    };

    var yourscore = list[yourChoice][botChoice];
    var botscore = list[botChoice][yourChoice];

    console.log('human score'+ yourscore);
    console.log('botscore'+ botscore);
    return [yourscore,botscore];
}

function finalMessage([yourscore,botscore]){
    if(yourscore===0){
    return {'message':'You lost!','color':'red'};
    }
else if(yourscore===0.5){
    return {'message':'You tied!','color':'yellow'};
    }
else{
    return{'message':'You win!','color':'green'};
    }
}

function rpsFrontEnd(yourImage,botImage,finalMessage){


    var imageDataBase = {
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
     };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();


     var humanDiv = document.createElement('div');
     var botDiv = document.createElement('div');
     var messageDiv = document.createElement('div');

     humanDiv.innerHTML = "<img src='" +imageDataBase[yourImage] +"' width=200px style='box-shadow:0px 0px 10px rgba(20,43,200,0.8);'>"
     document.getElementById('image').appendChild(humanDiv);

     messageDiv.innerHTML = "<h1 style='color:"+finalMessage['color'] + "; justify-content:space-around;padding:35px;font-size:60px;'>" +finalMessage['message']+"</h1>"
    document.getElementById('image').appendChild(messageDiv);

     botDiv.innerHTML = "<img src='" +imageDataBase[botImage] +"' width=200px style='box-shadow:0px 0px 10px rgba(200,43,20,0.8);'>"
     document.getElementById('image').appendChild(botDiv);
}

//challenge 4: Change the color of all buttons

var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllbuttons = [];
for(let i=0;i<all_buttons.length;i++){
    copyAllbuttons.push(all_buttons[i].classList[1]);
}
console.log(copyAllbuttons);

function buttonColorChange(ButtonColor){
    if(ButtonColor.value=== 'red'){
    console.log('hello');
        buttonRed();
    }
    else if(ButtonColor.value==='green'){
        buttonGreen();
    }
    else if(ButtonColor.value==='random'){
        buttonRandom();
    }
    else if(ButtonColor.value==='reset'){
        buttonReset();
    }
}

function buttonRed(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for(let i=0;i<all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonRandom(){
var choices = ['btn-primary','btn-success','btn-danger','btn-warning']
    var random = Math.floor(Math.random()*4);
    console.log(random);
    for(let i=0; i<all_buttons.length; i++)
    {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[random]);
    }
}

//    if(random===0){
//        for(let i=0;i<all_buttons.length;i++){
//            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
//            all_buttons[i].classList.add('btn-primary');
//        }
//    }
//    if(random===1){
//        for(let i=0;i<all_buttons.length;i++){
//            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
//            all_buttons[i].classList.add('btn-success');
//        }
//    }
//    if(random===2){
//        for(let i=0;i<all_buttons.length;i++){
//            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
//            all_buttons[i].classList.add('btn-warning');
//        }
//    }
//    if(random===3){
//        for(let i=0;i<all_buttons.length;i++){
//            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
//            all_buttons[i].classList.add('btn-danger');
//        }
//    }

function buttonReset(){
    for(let i=0; i<all_buttons.length; i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllbuttons[i]);
    }
}

// Challenge 5: Blackjack
let blackjackGame = {
    'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    'cardsMap':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':10,'Q':10,'K':10,'A':[1,11]},
    'win':0,
    'loss':0,
    'drew':0,
    'isStand':false,
    'turnsOver':false,
}
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const lossSound = new Audio('sounds/aww.mp3');

document.querySelector('#blackjackHit').addEventListener('click',blackjackHit);
document.querySelector('#blackjackStand').addEventListener('click',blackjackStand);
document.querySelector('#blackjackDeal').addEventListener('click',blackjackDeal);

 function blackjackHit(){
    if(blackjackGame['isStand'] === false){
     let card = random();
    showImages(card,YOU);
    console.log(card);
    updateScore(card,YOU);
    showScores(YOU);
    }
}

function sleep(ms){
    return new Promise(resolve =>  setTimeout(resolve, ms));
}

 async function blackjackStand(){

//while(DEALER['score'] > 16 && blackjackGame[])
    blackjackGame['isStand'] = true;
    while(DEALER['score'] < 16 && blackjackGame['isStand'] === true){
    let card = random();
    console.log(card);
    showImages(card , DEALER);
    updateScore(card,DEALER);
    showScores(DEALER);
    await sleep(1000);
    }

      blackjackGame['turnsOver'] = true;
      showResult(computeWinner());




}

function showImages(card , activePlayer){
    if(activePlayer['score'] <= 21){
    activeImages = document.createElement('img');
    activeImages.src = `images/${card}.png`;
    document.querySelector(activePlayer['div']).appendChild(activeImages);
    hitSound.play();
    console.log('sound');
    }
}

function blackjackDeal(){
//    computeWinner();
//    showResult(computeWinner());
    if(blackjackGame['turnsOver'] === true ){

    blackjackGame['isStand'] = false;
    let yourImages = document.querySelector(YOU['div']).querySelectorAll('img');
    let yourImage = document.querySelector(DEALER['div']).querySelectorAll('img');

     for(let i=0;i<yourImages.length;i++){
        yourImages[i].remove();
    }
    for(let i=0;i<yourImage.length;i++){
        yourImage[i].remove();
    }
    YOU['score']=0;
    DEALER['score']=0;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color = 'white';

    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').style.color = 'white';

    document.querySelector('#blackjack-result').textContent = 'let'+"'s"+' play';
    document.querySelector('#blackjack-result').style.color = 'black';
    blackjackGame['turnsOver'] = true;
    }

}

function random(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function updateScore(card,activePlayer){
    if(card === 'A'){
    console.log('its A');
    if((activePlayer['score'] + blackjackGame['cardsMap'][card][1]) <=21){

    activePlayer['score'] += blackjackGame['cardsMap'][card][1];

    }
    else{
    activePlayer['score'] += blackjackGame['cardsMap'][card][0];

    }
    }else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }

}

 function showScores(activePlayer){
    if(activePlayer['score'] > 21){
    document.querySelector(activePlayer['scoreSpan']).textContent = 'Bust!';
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
        }

}
function computeWinner(){
let winner;
if(YOU['score'] <=21){
    if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
    winner = YOU;
    console.log('you win');
    blackjackGame['win']++;
    }
    else if(DEALER['score'] > YOU['score']){
    winner = DEALER;
    console.log('you lost');
    blackjackGame['loss']++;
    }
    else if(YOU['score'] === DEALER['score']){
    console.log('you drew');
    blackjackGame['drew']++;
    }
}else if(DEALER['score'] <= 21 && YOU['score'] > 21){
    winner = DEALER;
    console.log('you lost');
    blackjackGame['loss']++;
    }
    else if(YOU['score'] > 21 && DEALER['score'] > 21){
    console.log('you drew');
    blackjackGame['drew']++;
    }
    return winner;
}

function showResult(winner){
    let message,messageColor;
    if(blackjackGame['turnsOver'] === true){
    if(winner === YOU){
    message = 'you won!';
    messageColor = 'green';
    winSound.play();
    document.querySelector('.yourData').textContent = blackjackGame['win'];
    }
    else if (winner === DEALER){
    message = 'you lost!';
    messageColor ='red';
    lossSound.play();
    document.querySelector('.dealerData').textContent = blackjackGame['loss'];

    }
    else{
    message = 'you drew!';
    messageColor = 'black';
    document.querySelector('.drewData').textContent = blackjackGame['drew'];

    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;
    }
}
