// 다크,라이트모드
document.querySelector('#switchBtn').addEventListener('click', function(e) {

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

        this.setAttribute('data-status', 'light');
        this.innerHTML = 'dark';
    }
});