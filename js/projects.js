const $body = document.querySelector('body');

// font-size, img-size 관련
adjustSize();
window.addEventListener('resize', adjustSize);

function adjustSize() {
    // 창 너비
    let viewportWidth = document.documentElement.clientWidth;

    adjustImgSize(viewportWidth);
    adjustFontSize(viewportWidth);
}

function adjustImgSize(viewportWidth) {

}
function adjustFontSize(viewportWidth) {
    // .swiper-container 태그들
    let swiperContainers = document.querySelectorAll('.swiper-container');

    for (var i = 0; i < swiperContainers.length; i++) {
        (function(index) {
            if (viewportWidth <= 768) {
                // swiperContainers[index].style.fontSize = 12 + 'px';
                $body.style.setProperty('--swiper-font-size', 12);
            } else {
                let sContainerWidth = swiperContainers[index].offsetWidth;
                let fontSize = sContainerWidth * 0.012;
                // swiperContainers[index].style.fontSize = fontSize + 'px';
                $body.style.setProperty('--swiper-font-size', fontSize);
            }
        })(i);
    }
}






// swiper 슬라이더
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
});






// 다크,라이트모드 관련

// 전체삭제
// window.localStorage.clear();

// const $body = document.querySelector('body');
const icons = document.querySelectorAll('.icon-img');
// const switchBtn = document.querySelector('#switchBtn');

// 페이지가 열렸을 때의 테마 확인
let theme = window.localStorage.getItem('theme');

// 다크모드 function

const darkModeFunc = function() {
    // 색상 코드 변경
    $body.style.setProperty('--bg', '#222');
    $body.style.setProperty('--font', '#fff');
    $body.style.setProperty('--border', '#484848');

    // 상태는 다크모드로 바꾸고 라이트 모드로 변경하는 버튼 노출
    window.localStorage.setItem('theme', 'dark');
    theme =  window.localStorage.getItem('theme');
    // switchBtn.innerHTML = 'light';
}

// 라이트모드 function
const lightModeFunc = function() {
    $body.style.setProperty('--bg', '#fff');
    $body.style.setProperty('--font', '#222');
    $body.style.setProperty('--border', '#efefef');

    window.localStorage.setItem('theme', 'light');
    theme =  window.localStorage.getItem('theme');
    // switchBtn.innerHTML = 'dark';
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

// 창 크기가 바뀌었을 때, theme값에 따라 테마 적용
// 이거 없어도 되나?
// window.addEventListener('resize', changeMode);

// 버튼을 클릭했을 때, 현재 테마가 라이트라면 다크로 반대는 반대로~
// switchBtn.addEventListener('click', function() {
//     if (theme == 'light') {
//         darkModeFunc();
//     } else {
//         lightModeFunc();
//     }
// });



// 닫기 버튼 눌렀을 때
const closeBtn = document.querySelector('#closeBtn');

closeBtn.addEventListener('click', function() {
    window.close();
});

