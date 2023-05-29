// 다크,라이트모드 관련
const switchBtn = document.querySelector('#switchBtn');

if (switchBtn.getAttribute('data-status') == 'light') {
    document.querySelector('#utterance-dark').style.display = 'none';
    switchBtn.innerHTML = 'dark';
} else {
    document.querySelector('#utterance-light').style.display = 'none';
    switchBtn.innerHTML = 'light';
}

switchBtn.addEventListener('click', function(e) {

    const $body = document.querySelector('body');
    const dataStatus = this.getAttribute('data-status');
    const icons = document.querySelectorAll('.icon-img');

    // 라이트 모드라면 다크 모드로
    if (dataStatus == 'light') {

        // 색상 코드 변경
        $body.style.setProperty('--bg', '#222');
        $body.style.setProperty('--font', '#fff');
        $body.style.setProperty('--border', '#484848');

        // 아이콘 변경
        icons.forEach(function(icon) {
            icon.src = icon.src.replace('fff', '222');
        });

        // 댓글창 변경
        document.querySelector('#utterance-light').style.display = 'none';
        document.querySelector('#utterance-dark').style.display = 'block';

        // 상태는 다크모드로 바꾸고 라이트 모드로 변경하는 버튼 노출
        this.setAttribute('data-status', 'dark');
        this.innerHTML = 'light';

    } else {

        $body.style.setProperty('--bg', '#fff');
        $body.style.setProperty('--font', '#222');
        $body.style.setProperty('--border', '#efefef');

        icons.forEach(function(icon) {
            icon.src = icon.src.replace('222', 'fff');
        });

        document.querySelector('#utterance-light').style.display = 'block';
        document.querySelector('#utterance-dark').style.display = 'none';

        this.setAttribute('data-status', 'light');
        this.innerHTML = 'dark';
    }
});