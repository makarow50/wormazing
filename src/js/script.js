const sliderMain = tns({
   container: '.slider',
   items: 1,
   slideBy: 'page',
   autoplay: false,
   controls: false,
   navPosition: "top"

});

const slider = tns({
   container: '.team__slider',
   items: 1,
   slideBy: 'page',
   autoplay: false,
   controls: false,
   navPosition: "top"

}); 


document.querySelector('.prev').addEventListener('click', function () {
   slider.goTo('prev');
}); 

document.querySelector('.next').addEventListener('click', function () {
   slider.goTo('next');
}); 