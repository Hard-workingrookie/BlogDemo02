

window.onload = function () {
    let landInTexts = document.querySelectorAll(".footerName");
    let logoTxtTexts = document.querySelectorAll(".logoTxt");
    landInTexts.forEach(landInText => {
        let letters = landInText.textContent.split("");
        landInText.textContent = "";
        letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.05}s`;
            landInText.append(span);
        });
    });
    logoTxtTexts.forEach(logoTxt => {
        let letters = logoTxt.textContent.split("");
        logoTxt.textContent = "";
        letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.05}s`;
            logoTxt.append(span);
        });
    });

    let loading = document.querySelector(".loading");
    let loadingletters = loading.textContent.split("");
    loading.textContent = "";
    loadingletters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i / 10}s`;
        loading.append(span);
    });
    loading.onclick = function () {
        window.location.href = "./pages/Message/index.html"
    }
    

}

$(function () {
    $('#github').click(function(){
        window.open('https://github.com/Hard-workingrookie');
    })
    // 返回顶部，绑定gotop1图标和gotop2文字事件
    $("#gotop1,#gotop2").click(function (e) {
        TweenMax.to(window, 1.5, { scrollTo: 0, ease: Expo.easeInOut });
        var huojian = new TimelineLite();
        huojian.to("#gotop1", 1, { rotationY: 720, scale: 0.6, y: "+=40", ease: Power4.easeOut })
            .to("#gotop1", 1, { y: -1000, opacity: 0, ease: Power4.easeOut }, 0.6)
            .to("#gotop1", 1, { y: 0, rotationY: 0, opacity: 1, scale: 1, ease: Expo.easeOut, clearProps: "all" }, "1.4");
    });
});
