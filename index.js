

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



}