window.addEventListener("scroll", function () {
    if (window.scrollY > 1) {
        document.querySelector("#header").classList.add("headerScroll");
    } else {
        document.querySelector("#header").classList.remove("headerScroll");
    }
});

function showHeader() {
    document.querySelector("#header").classList.add("headerShow");
}

function hideHeader() {
    document.querySelector("#header").classList.remove("headerShow");
}
