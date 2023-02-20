
(function(){
    let myPageJS = {
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

            numIptUpBtn.addEventListener("click",clickNumIptUp);
            numIptDownBtn.addEventListener("click",clickNumIptDown);        
            numIptEl.addEventListener("change",changeNumIptEvt);    
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
                fileIpt.addEventListener("change", changeFileIpt);
            });
        },
        accoEvt:function(){
            function mypageDepthEvt(){
                let uploadDepth = document.querySelector(".mypage_side > h3.tit");
                let depth = document.querySelector(".mypage_side > .mypage_list")

                uploadDepth.addEventListener("click", function() {
                    
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

                uploadDepth.addEventListener("click", function() {
                    
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

        init:function(){
            this.iptFileEvt();
            this.iptNumberEvt();
            this.accoEvt();
        }
    }
    myPageJS.init();
})();