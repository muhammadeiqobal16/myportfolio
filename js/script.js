document.addEventListener(`DOMContentLoaded`, function(){
    const navBtns = document.getElementsByClassName(`navBtn`);

    for(let navBtn of navBtns){
        navBtn.addEventListener(`click`, function(){
            for(let i = 0; i < navBtns.length; i++){
                if(navBtns[i].classList.contains(`active`)){
                    navBtns[i].classList.remove(`active`);
                    navBtn.classList.add(`active`);
                };
            };
        });
    };
});