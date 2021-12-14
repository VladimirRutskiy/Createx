let offset = 0;
const sliderLine = document.querySelector('.slider-line');
const sliderLineTwo = document.querySelector('.slider-line-two');

//First slider
document.querySelector('.slider-next').addEventListener('click', function(){
     offset = offset + 315;
     if (offset > 630) {
          offset = 0;
     }
     sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
     offset = offset - 315;
     if (offset < 0) {
          offset = 630;
     }
     sliderLine.style.left = -offset + 'px';
});

//Second slider
document.querySelector('.slider-next-two').addEventListener('click', function(){
     offset = offset + 1020;
     if (offset > 3060 ) {
          offset = 0;
     }
     sliderLineTwo.style.left = -offset + 'px';
});

document.querySelector('.slider-prev-two').addEventListener('click', function(){
     offset = offset - 1020;
     if (offset < 0) {
          offset = 3060;
     }
     sliderLineTwo.style.left = -offset + 'px';
});

