window.onload = function () {
    var infoBtn = document.getElementById('info');
	var introuduContainer = document.getElementById('introuduContainer')
    var isShow = false
    infoBtn.onclick = function () {
        if (isShow == false) {
            isShow = true
            info.innerHTML = 'CLOSE';
            introuduContainer.style.display = 'block'
        } else {
            isShow = false
            info.innerHTML = 'INFO';
            introuduContainer.style.display = 'none'

        }


    }
}