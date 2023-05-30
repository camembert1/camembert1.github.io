// 반응형 모바일 화면 화살표
function scrollToBottom() {
    const section1 = document.getElementById("section1-grid");
    const section1Info = section1.getBoundingClientRect();
    const scrollTo = section1Info.bottom + window.scrollY;
    
    window.scrollTo({
        top: scrollTo,
        behavior: "smooth"
    });
}





// 다크,라이트모드 관련

// 전체삭제
// window.localStorage.clear();

const $body = document.querySelector('body');
const icons = document.querySelectorAll('.icon-img');
const switchBtn = document.querySelector('#switchBtn');

// 페이지가 열렸을 때의 테마 확인
let theme = window.localStorage.getItem('theme');

// 다크모드 function
const darkModeFunc = function() {
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
    window.localStorage.setItem('theme', 'dark');
    theme =  window.localStorage.getItem('theme');
    switchBtn.innerHTML = 'light';
}

// 라이트모드 function
const lightModeFunc = function() {
    $body.style.setProperty('--bg', '#fff');
    $body.style.setProperty('--font', '#222');
    $body.style.setProperty('--border', '#efefef');

    icons.forEach(function(icon) {
        icon.src = icon.src.replace('222', 'fff');
    });

    document.querySelector('#utterance-light').style.display = 'block';
    document.querySelector('#utterance-dark').style.display = 'none';

    window.localStorage.setItem('theme', 'light');
    theme =  window.localStorage.getItem('theme');
    switchBtn.innerHTML = 'dark';
}

// 페이지가 열렸을 때, 만약 localStorage에서 가져온 theme값이 dark라면 다크모드
if (theme == 'dark') {
    darkModeFunc();
} else {
    lightModeFunc();
}

// 버튼을 클릭했을 때, 현재 테마가 라이트라면 다크로 반대는 반대로~
switchBtn.addEventListener('click', function(e) {
    if (theme == 'light') {
        darkModeFunc();
    } else {
        lightModeFunc();
    }
});