/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, dice, activePlayer, gamePlaying;

scores=[0,0];
roundScore=0;
activePlayer=0;
gamePlaying=true;

function init(){
   document.querySelector('#score-0').textContent=0;
   document.querySelector('#score-1').textContent=0;
   document.querySelector('#current-0').textContent=0;
   document.querySelector('#current-1').textContent=0;
   document.querySelector(".dice").style.display="none";
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   activePlayer=0;
   scores=[0,0];
   roundScore=0;
   activePlayer=0;
   gamePlaying=true;
}
function disableKeys(){
   document.querySelector('.btn-roll').classList.add('hide');
   document.querySelector('.btn-hold').classList.add('hide');
  
}
function nextPlayer(){
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');
   roundScore=0;
}
init();
document.querySelector(".btn-roll").addEventListener('click', function()
{
if(gamePlaying){
   dice= Math.floor(Math.random()*6+1);
   var diceDOM= document.querySelector(".dice");
   diceDOM.style.display='block';
   diceDOM.src=('dice-'+dice+'.png');

   if(dice==1){
   roundScore=0;
   document.querySelector('#current-'+activePlayer).textContent=0;
   nextPlayer();

} else{

   roundScore+=dice;
   document.querySelector('#current-'+activePlayer).textContent=roundScore;
}
}});

//update score
document.querySelector(".btn-hold").addEventListener('click', function()
{
   scores[activePlayer]+=roundScore;
   document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   document.querySelector('#current-'+activePlayer).textContent=0;

   if (scores[activePlayer]>=20){
      disableKeys();
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      
      document.querySelector('.player-1-panel').classList.remove('active');
      document.querySelector('.player-2-panel').classList.remove('active');
      
   }
   nextPlayer();
});

document.querySelector(".btn-new").addEventListener('click', function()
{
  init();

  document.querySelector('#name-' + activePlayer).textContent = 'Player 1';
  document.querySelector('.btn-roll').classList.remove('hide');
  document.querySelector('.btn-hold').classList.remove('hide');
 



  
});
//update current on each click, if dice 0 than change to next player



