
(function(){
    let mainJS = {

        swiperEvt:function(){
          let videoSlider = document.querySelector('.sec_video.swiper-area');
          videoSlider.querySelectorAll('.swiper-container').forEach(function(slide,idx){
            let slider = new Swiper(slide,{
              slidesPerView: 'auto',
              centeredSlides: true,
              observer: true,
              observeParents: true,
              loop: true,
            });
          });
        },

        init:function(){
            this.swiperEvt();
        }
    }
    mainJS.init();
})();