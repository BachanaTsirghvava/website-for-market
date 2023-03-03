const navIndicator = document.getElementById("nav-indicator");
const scrollTopButton = document.getElementById("scroll-top");

//function which handles nav indicator size
function navIndicatorHandler(){
    let winScroll = document.documentElement.scrollTop;
    let height = 
    document.documentElement.scrollHeight - 
    document.documentElement.clientHeight;

    let scrolled = Math.floor((winScroll / height) * 100);

    console.log(scrolled);

    navIndicator.style.width = scrolled + "%";
}

//events
window.addEventListener("scroll", navIndicatorHandler);


//function which handles scroll top 
function scrollTopCheck(scroll) {
    if (scroll > 500) {
        scrollTopButton.classList.add("scroll-top__active");
    } else {
        scrollTopButton.classList.remove("scroll-top__active");
    }
}

scrollTopButton.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});

//event
window.addEventListener("scroll", function() {
    const scroll_top = document.documentElement.scrollTop;

    scrollTopCheck(scroll_top);
});