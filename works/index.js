window.onload = function () {
    var infoBtn = document.getElementById('info');
	var introuduContainer = document.getElementById('introuduContainer')
    var isShow = false
    infoBtn.onclick = function () {
        if (isShow == false) {
            isShow = true
            info.innerHTML = '关闭';
            introuduContainer.style.display = 'block'
        } else {
            isShow = false
            info.innerHTML = '查看详情';
            introuduContainer.style.display = 'none'

        }


    }
}