import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);
import 'swiper/css';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';



new Swiper('.tutors-slider', {
    navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev'
    },
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true
});
























// let offset = 0;
// const sliderLine = document.querySelector('.slider-line');
// const sliderLineTwo = document.querySelector('.slider-line-two');

// //First slider
// document.querySelector('.slider-next').addEventListener('click', function(){
//      offset = offset + 315;
//      if (offset > 630) {
//           offset = 0;
//      }
//      sliderLine.style.left = -offset + 'px';
// });

// document.querySelector('.slider-prev').addEventListener('click', function(){
//      offset = offset - 315;
//      if (offset < 0) {
//           offset = 630;
//      }
//      sliderLine.style.left = -offset + 'px';
// });

// //Second slider
// document.querySelector('.slider-next-two').addEventListener('click', function(){
//      offset = offset + 1020;
//      if (offset > 3060 ) {
//           offset = 0;
//      }
//      sliderLineTwo.style.left = -offset + 'px';
// });

// document.querySelector('.slider-prev-two').addEventListener('click', function(){
//      offset = offset - 1020;
//      if (offset < 0) {
//           offset = 3060;
//      }
//      sliderLineTwo.style.left = -offset + 'px';
// });

