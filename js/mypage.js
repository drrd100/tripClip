
(function(){
    let myPageJS = {
        iptNumberEvt:function(){
            // input number event
            const numIptUpBtn = document.querySelector(".num_ipt_up_btn");
            const numIptDownBtn = document.querySelector(".num_ipt_down_btn");

            function clickNumIptUp(){
                this.parentNode.querySelector("[type=number]").stepUp();
            }
            function clickNumIptDown(){
                this.parentNode.querySelector("[type=number]").stepDown();
            }

            numIptUpBtn.addEventListener("click",clickNumIptUp);
            numIptDownBtn.addEventListener("click",clickNumIptDown);            
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

        init:function(){
            this.iptFileEvt();
            this.iptNumberEvt();
        }
    }
    myPageJS.init();
})();