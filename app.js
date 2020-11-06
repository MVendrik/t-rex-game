document.addEventListener('DOMContentLoaded', () => {

  const trex = document.querySelector('.trex');


  document.addEventListener('keydown', (e) => {
    let position = 0;
    if (e.keyCode === 32) {
    
      let timerUp = setInterval( () => {
        if (position == 150) {
          clearInterval(timerUp);
          let timerDown = setInterval( () => {
            if (position == 30 ){
              clearInterval(timerDown);
            }
            position -= 30;
            trex.style.bottom = position + 'px';
          }, 20);
        }

        position += 30;
        trex.style.bottom = position + 'px';
      }, 20);  
    }
    } );
})