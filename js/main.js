
(function(){
    let mainJS = {

        swiperEvt:function(){
          let authorSlider = document.querySelector('.sec_best_author.swiper-area');
          authorSlider.querySelectorAll('.swiper-container').forEach(function(slide,idx){
            let slider = new Swiper(slide,{
              observer: true,
              loop: true,
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            });
          });
        },

        init:function(){
            this.swiperEvt();
        }
    }
    mainJS.init();
})();