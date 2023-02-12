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
        init:function(){
            this.accoEvt();
        }
    }
    mainJS.init();
})();