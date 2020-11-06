document.addEventListener('DOMContentLoaded', () => {

  const trex = document.querySelector('.trex');
  let isJumping = false;
  const gravity = 0.9;
  let position = 0;

  // Jump functionality Trex 
  document.addEventListener('keydown', (e) => {
    let count = 0;
    if (e.keyCode === 32) {

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

});