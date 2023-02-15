
(function(){
    let mainJS = {
        accoEvt:function(){
            function HamburgerEve(){
                let btnMenu = document.querySelector(".btn_hamburger");
                let gnb = document.querySelector(".gnb_mo");
                let i;

                btnMenu.addEventListener("click", function() {
                    if (gnb.style.maxHeight){
                        gnb.style.maxHeight = null;
                    } else {
                        gnb.style.maxHeight = gnb.scrollHeight + "px";
                    } 
                });
            }
            HamburgerEve();

            function gnbEvt(){
                let category = document.querySelectorAll(".gnb_mo > li > a");
                let i;

                for (i = 0; i < category.length; i++) {
                category[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    let content = this.nextElementSibling;
                    if (content.style.maxHeight){
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + "px";
                    } 
                });
                }
            }
            gnbEvt();
        },
        videoEvt:function(){
            let item = document.querySelectorAll(".sec_search_result .item");

            for(i = 0; i < item.length; i++){
                item[i].addEventListener('mouseenter', function(){
                    let thumbBox = this.children[0];
                    let video = thumbBox.children[1];

                    async function playVideo() {
                        try {
                            await video.play();
                        } catch (err) {
                            console(err);
                        }
                    }
                    video.classList.add("on");
                    playVideo();
                });

                item[i].addEventListener('mouseleave', function(){
                    let thumbBox = this.children[0];
                    let video = thumbBox.children[1];
                    video.classList.remove("on");
                    video.pause();

                });
            }
            

            
        },
        init:function(){
            this.accoEvt();
            this.videoEvt();
        }
    }
    mainJS.init();
})();