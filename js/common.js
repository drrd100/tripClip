
(function(){
    let commonJS = {
        accoEvt:function(){
            function HamburgerEvt(){
                let btnMenu = document.querySelector(".btn_hamburger");
                let gnb = document.querySelector(".gnb_mo");

                btnMenu?.addEventListener("click", function() {
                    let category = document.querySelectorAll(".gnb_mo > li > a");
                    let depth = document.querySelectorAll(".gnb_mo .depth");
                    let i,j;

                    for(i=0; i < category.length; i++){
                        category[i].classList.remove("active");
                    }

                    for(j=0; j < depth.length; j++){
                        depth[j].style.maxHeight = null;
                    }

                    if (gnb.style.maxHeight){
                        gnb.style.maxHeight = null;
                    } else {
                        gnb.style.maxHeight = "900px";
                    } 
                });
            }
            HamburgerEvt();

            function gnbEvt(){
                let category = document.querySelectorAll(".gnb_mo > li > a");
                let depth = document.querySelectorAll(".gnb_mo .depth");

                let i,j,k;

                for (i = 0; i < category.length; i++) {
                category[i]?.addEventListener("click", function() {
                    let content = this.nextElementSibling;

                    for(j = 0; j < category.length; j++){
                        category[j].classList.remove("active");
                    }
                    for(k = 0; k < depth.length; k++){
                        depth[k].style.maxHeight = null;
                    }
                
                    this.classList.add("active");
                    if (content.style.maxHeight){
                        content.style.maxHeight = null;
                    } else {
                        
                        content.style.maxHeight = content.scrollHeight + "px";
                    } 
                });
                }
            }
            gnbEvt();

            function mypageDepthEvt(){
                let uploadDepth = document.querySelector(".mypage_side > h3.tit");
                let depth = document.querySelector(".mypage_side > .mypage_list")

                uploadDepth?.addEventListener("click", function() {
                    
                    if (depth.style.maxHeight){
                        depth.style.maxHeight = null;
                        uploadDepth.classList.remove("on");
                    } else {
                        depth.style.maxHeight = "920px";
                        uploadDepth.classList.add("on");
                    } 
                });
            }
            mypageDepthEvt();

            function uploadDepthEvt(){
                let uploadDepth = document.querySelector(".mypage_list > li > a.arrow");
                let depth = document.querySelector(".mypage_list_depth2")

                uploadDepth?.addEventListener("click", function() {
                    
                    if (depth.style.maxHeight){
                        depth.style.maxHeight = null;
                        uploadDepth.classList.remove("on");
                    } else {
                        depth.style.maxHeight = "620px";
                        uploadDepth.classList.add("on");
                    } 
                });
            }
            uploadDepthEvt();
            
        },
        selectEvt:function(){
            // select event
            const selectBtns = document.querySelectorAll(".select_wrap button");
            const selectEl = document.querySelectorAll(".select_wrap");
            
            function clickSelectEvt(){
                let thisTxt = this.innerText;
                let thisSelect = this.parentNode.parentNode;
                
                thisSelect.classList.contains("show") ? 
                    thisSelect.classList.remove("show") :
                    thisSelect.classList.add("show");
                
                thisSelect.querySelector(".select_btn").innerText = thisTxt;
                thisSelect.querySelector(".select_btn").classList.add("active");
            }

            selectBtns.forEach((selectBtn)=>{
                selectBtn?.addEventListener("click", clickSelectEvt);
            });

            for(let i = selectEl.length; i > 0; i--){
                selectEl[selectEl.length-i].querySelector("ul").style.zIndex = `${i + 10}`;
            }
        },
        videoEvt:function(){
            let item = document.querySelectorAll("#video_list .item");
            
            for(i = 0; i < item.length; i++){
                item[i]?.addEventListener('mouseenter', function(){
                    let thumbBox = this.children[0];
                    let video = thumbBox.children[1];

                    async function playVideo() {
                        try {
                            await video.play();
                        } catch (err) {
                            console.log(err);
                        }
                    }
                    video.classList.add("on");
                    playVideo();
                });

                item[i]?.addEventListener('mouseleave', function(){
                    let thumbBox = this.children[0];
                    let video = thumbBox.children[1];
                    video.classList.remove("on");
                    video.pause();
                });
            }
        },
        multiIptRangeEvt:function(){
            // multi input range event
            const inputLeft = document.getElementById("input-left");
            const inputRight = document.getElementById("input-right");

            const thumbLeft = document.querySelector(".slider > .thumb.left");
            const thumbRight = document.querySelector(".slider > .thumb.right");
            const range = document.querySelector(".slider > .range");
            
            let rangeMinTxt = document.querySelector(".middle .middle_bottom .min_txt");
            let rangeMaxTxt = document.querySelector(".middle .middle_bottom .max_txt");

            const setLeftValue = () => {
                const _this = inputLeft;
                const [min, max] = [parseInt(_this.min), parseInt(_this.max)];
                
                _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1000);
                
                const percent = ((_this.value - min) / (max - min)) * 100;
                thumbLeft.style.left = percent + "%";
                range.style.left = percent + "%";

                rangeMinTxt.innerHTML = _this.value;
            };
            
            const setRightValue = () => {
                const _this = inputRight;
                const [min, max] = [parseInt(_this.min), parseInt(_this.max)];
                
                _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1000);
                
                const percent = ((_this.value - min) / (max - min)) * 100;
                thumbRight.style.right = 100 - percent + "%";
                range.style.right = 100 - percent + "%";

                rangeMaxTxt.innerHTML = _this.value;
            };

            inputLeft?.addEventListener("input", setLeftValue);
            inputRight?.addEventListener("input", setRightValue);
        },
        filterEvt:function(){
            // filter event
            const filterBtn = document.querySelector(".search_wrap .filter_open_btn");
            const filterEl = document.querySelector(".filter_wrap");
            let isFilter = false;
            
            const toggleFilterEvt = () => {
                if(!isFilter){
                    filterEl.classList.add("show");
                    filterBtn.classList.add("active");
                    isFilter = true;
                }else{
                    filterEl.classList.remove("show");
                    filterBtn.classList.remove("active");
                    for(let i = 0; i < document.querySelectorAll(".filter_group .filter_box").length; i++){
                        document.querySelectorAll(".filter_wrap .filter_box")[i].querySelector("ul").classList.remove("show");
                    }
                    isFilter = false;
                }
            }
            
            filterBtn?.addEventListener("click", toggleFilterEvt);
        },
        btnEvt:function(){
            let star = document.querySelector(".star")
            star?.addEventListener("click",function() {
                let icon = this.children[0];
                icon.classList.toggle("active");
            });
        },
        iptNumberEvt:function(){
            // input number event
            const numIptUpBtn = document.querySelector(".num_ipt_up_btn");
            const numIptDownBtn = document.querySelector(".num_ipt_down_btn");
            const numIptEl = document.querySelector("input[type='number']");

            function clickNumIptUp(){
                this.parentNode.querySelector("[type=number]").stepUp();
                this.parentNode.querySelector(".num_txt").innerHTML = `
                    ₩ ${this.parentNode.querySelector("[type=number]").value}
                `;
            }
            function clickNumIptDown(){
                this.parentNode.querySelector("[type=number]").stepDown();
                this.parentNode.querySelector(".num_txt").innerHTML = `
                    ₩ ${this.parentNode.querySelector("[type=number]").value}
                `;
            }
            function changeNumIptEvt(){
                let thisNum = this.value;
                if(thisNum != 0 ){
                    this.parentNode.querySelector('.num_txt').innerHTML = `
                        ₩ ${thisNum}
                    `;
                }else{
                    this.parentNode.querySelector('.num_txt').innerHTML = `
                        ₩ 0
                    `;
                    this.value = 0;
                }
            }

            numIptUpBtn?.addEventListener("click",clickNumIptUp);
            numIptDownBtn?.addEventListener("click",clickNumIptDown);        
            numIptEl?.addEventListener("change",changeNumIptEvt);    
        },
        iptFileEvt:function(){
            // input file event
            const fileIpts = document.querySelectorAll("input[type=file]");

            function changeFileIpt(){
                let fileList = [];

                for(let i = 0; i < this.files.length; i++){
                    fileList.push(this.files[i].name);
                }
                
                fileList.forEach((file)=>{
                    let li = document.createElement("li");
                    let span = document.createElement("span");
                    span.setAttribute("class","file_name");
                    span.innerText = file;
                    let button = document.createElement("button");
                    button.setAttribute("class","file_remove_btn ico_gray_close");
                    li.appendChild(span);
                    li.appendChild(button);

                    this.parentNode.querySelector(".file_list").appendChild(li);
                })
            }

            fileIpts.forEach((fileIpt)=>{
                fileIpt?.addEventListener("change", changeFileIpt);
            });
        },
        init:function(){
            this.accoEvt();
            this.videoEvt();
            this.filterEvt();
            this.selectEvt();
            this.multiIptRangeEvt();
            this.btnEvt();
            this.iptFileEvt();
            this.iptNumberEvt();
        }
    }
    commonJS.init();
})();