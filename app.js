document.addEventListener('DOMContentLoaded', () => {

  const trex = document.querySelector('.trex');
  let isJumping = false;
  const gravity = 0.9;
  let position = 0;
  let isGameOver = false;
  const alert = document.querySelector('.alert');
  let countingScore = false;
  let scoreTimer;
  let scoreValue;

  // Jump functionality Trex 
  document.addEventListener('keydown', (e) => {
    let count = 0;
    if (e.keyCode === 32) {

      if (!countingScore) {
        countScore();
        countingScore = true;
      }

      if (! isJumping) {
        isJumping = true;

        let timerUp = setInterval( () => {
          if (count == 15) {
            clearInterval(timerUp);
            let timerDown = setInterval( () => {
              if (count == 0 ){
                clearInterval(timerDown);
                isJumping = false;
              };
              count--;
              position -= 5;
              position = position * gravity;
              trex.style.bottom = position + 'px';
            }, 20);
          };
  
          count++;
          position += 30;
          position = position * gravity;
          trex.style.bottom = position + 'px';
        }, 20);  
      };
    };
  } );

  function addObstacles() {
    let obstaclePosition = 1000;
    let randomTime = Math.random() * 4000;

    const obstacle = document.createElement('div');
   
    if(!isGameOver) {
      obstacle.className = 'obstacle';
    };
    
    const grid = document.querySelector('.grid');
    grid.appendChild(obstacle);
    obstacle.style.left = obstaclePosition + 'px';

    let timer = setInterval(() => {
      if (obstaclePosition > 0 && obstaclePosition < 60 && position < 60 ) {
        clearInterval(timer);
        alert.innerHTML = 'Game over!';
        isGameOver = true;
        stopScore();

        // Remove previous obstacles
        while(grid.firstChild) {
          grid.removeChild(grid.lastChild);
        }
      }

      obstaclePosition -= 10;
      obstacle.style.left = obstaclePosition + 'px';
    }, 20 );

    if (!isGameOver) {
      setTimeout(addObstacles, randomTime);
    }
  };

  function countScore() {
    let totalSeconds = 0;
    const score = document.querySelector('.score');

    scoreTimer = setInterval( () => {
      totalSeconds++;

      scoreValue = totalSeconds + "";

      score.innerHTML = ((new Array((6) - scoreValue.length).join('0')) + scoreValue);

    }, 100);
  }

 
  function stopScore() {
    clearInterval(scoreTimer);
    //countingScore = false;
  }

  addObstacles();

});