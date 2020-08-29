var scores, activePlayer, roundScore, gamePlaying; 

newGame();

//document.querySelector('#current-'+activePlayer).textContent=dice;
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
    var dice=Math.floor(Math.random()*6)+1;
    
    var diceDom=document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-' + dice +'.png';
    
    if (dice !== 1)
    {
        
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
        
    }
    else
    {
        
       nextPlayer();
        
    }
    
    }
});
document.querySelector('.btn-new').addEventListener('click', newGame);

 document.querySelector('.btn-hold').addEventListener('click', function () {
    //activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    if (gamePlaying) { 
     scores[activePlayer]+=roundScore;
     
     document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
     if (scores[activePlayer]>=100)
         {
             gamePlaying=false;
             
              document.querySelector('#name-' + activePlayer ).textContent = 'Winner!';
            
              document.querySelector('.dice').style.display='none';
             
             document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
             document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
             
         }
     else
     {
              
         nextPlayer();     
     
     }
    }
    
 });
function nextPlayer()
{
    roundScore=0;
    
    document.querySelector('#current-'+activePlayer).textContent=0;
    
    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    
     //document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        
        
        
        //document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');         
        document.querySelector('.player-1-panel').classList.toggle('active');
       
        document.querySelector('.dice').style.display='none';

}


function newGame()
{
    
    gamePlaying=true;
    scores=[0,0];
    roundScore=0;
    activePlayer=0;

        document.querySelector('.dice').style.display='none';

        document.getElementById('score-0').textContent='0'; 
        document.getElementById('score-1').textContent='0';
        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='0';
    
        document.getElementById('name-0').textContent = 'PLAYER 1';
        document.getElementById('name-1').textContent = 'PLAYER 2';
    
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
      
           
}
