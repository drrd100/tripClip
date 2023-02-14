(function(){
    
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
    
    filterBtn.addEventListener("click", toggleFilterEvt);
    
    
    // select event
    const selectBtns = document.querySelectorAll(".select_wrap button");
    
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
        selectBtn.addEventListener("click", clickSelectEvt);
    });

    
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

    inputLeft.addEventListener("input", setLeftValue);
    inputRight.addEventListener("input", setRightValue);
})();