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

// theme값에 따라 테마를 바꾸는 function
const changeMode = function() {
    if (theme == 'dark') {
        darkModeFunc();
    } else {
        lightModeFunc();
    }
}

// 페이지가 열렸을 때, theme값에 따라 테마 적용
changeMode();

// 버튼을 클릭했을 때, 현재 테마가 라이트라면 다크로 반대는 반대로~
switchBtn.addEventListener('click', function(e) {
    if (theme == 'light') {
        darkModeFunc();
    } else {
        lightModeFunc();
    }
});



// 스크롤 버튼 관련

// 버튼 클릭 시 스크롤 맨 위로
const scrollBtn = document.querySelector('#scrollBtn');
scrollBtn.addEventListener('click', function(e) {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // 부드러운 스크롤링을 위해 behavior 속성을 사용합니다.
    });
});

// 스크롤 동작 시 버튼 노출 여부 결정
window.addEventListener("scroll", function() {
    if (window.pageYOffset === 0) {
        scrollBtn.classList.remove("visible");
    } else {
        scrollBtn.classList.add("visible");
    }
});






// section1 링크 관련

const iconCircles = document.querySelectorAll('.icon-circle');
const iconLinks = document.querySelectorAll('.icon-link');

for (var i = 0; i < iconCircles.length; i++) {
    (function(index) {


        iconCircles[index].addEventListener("click", function() {
            clickFunc(index);
        });
        iconLinks[index].addEventListener("click", function() {
            clickFunc(index);
        });

        iconCircles[index].addEventListener("mouseover", function() {
            mouseoverFunc(index);
        });
        iconLinks[index].addEventListener("mouseover", function() {
            mouseoverFunc(index);
        });
        
        
        iconCircles[index].addEventListener("mouseout", function() {
            mouseoutFunc(index);
        });
        iconLinks[index].addEventListener("mouseout", function() {
            mouseoutFunc(index);
        });


    })(i);
}

clickFunc = function(index) {
    switch (index) {
        case 0:
            location.href='mailto:ige12091@gmail.com';
            break;
        case 1:
            window.open('https://github.com/camembert1', '_blank');
            break;
            case 2:
            window.open('https://github.com/camembert1', '_blank');
            break;
    }
}



mouseoverFunc = function(index) {
    iconCircles[index].classList.add('hover');
    iconLinks[index].classList.add('hover');

    if (theme == 'dark') {
        icons[index].src = icons[index].src.replace('222', 'fff');
    } else {
        icons[index].src = icons[index].src.replace('fff', '222');
    }
}

mouseoutFunc = function(index) {
    iconCircles[index].classList.remove('hover');
    iconLinks[index].classList.remove('hover');

    if (theme == 'dark') {
        icons[index].src = icons[index].src.replace('fff', '222');
    } else {
        icons[index].src = icons[index].src.replace('222', 'fff');
    }
}