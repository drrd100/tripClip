
(function(){
    let mainJS = {

        swiperEvt:function(){
            // new Swiper('.swiper-container', {
            //     speed: 3500,
            //     slidesPerView: 'auto',
            //     loop: true,
            //     autoplay:{
            //         delay: 0,
            //         disableOnInteraction: true,
            //     },
            // });

            // let videoSwiper = document.querySelector(".slide_wrap .swiper-container").swiper;



            // document.querySelector('.swiper-container').addEventListener("mouseenter", function(){
            //     console.log(videoSwiper);
            //     videoSwiper.autoplay.stop();
            // })
            // document.querySelector('.swiper-container').addEventListener("mouseleave", function(){
            //     console.log(videoSwiper)
            //     videoSwiper.autoplay.start();
            // })
            var mySwiper = new Swiper('.swiper-container',{
                pagination: '.pagination',
                loop:true,
                autoplay: 1000,
                paginationClickable: true
              })
              
              document.querySelector('.swiper-container').addEventListener('mouseenter', function(e){
                console.log('stop autoplay');
                mySwiper.stopAutoplay();
              })
              document.querySelector('.swiper-container').addEventListener('mouseleave', function(e){
                console.log('start autoplay');
                mySwiper.startAutoplay();
              })
        },

        init:function(){
            this.swiperEvt();
        }
    }
    mainJS.init();
})();