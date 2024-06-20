




/**
* 스크롤 기억 설정1 --- ios에선 스크롤 기억 기능을 지원하지 않음

window.addEventListener('pagehide', function(e){
    sessionStorage.setItem('historyScrollTop' , document.documentElement.scrollTop);
});
*/

/*
// location을 사용하는 방법 --- 새로고침 시 제자리
location.reload();
location.replace(location.href);
location.href = location.href;

// history를 사용하는 방법
history.go(0);
/* 출처: https://7942yongdae.tistory.com/53 [개발자 일지:티스토리]
*/

/**
* 스크롤 기억 설정2
* 스크롤이 움직일때마다 값을 sessionStorage에 넣어줌 --- 대부분의 pc 브라우저는 자동으로 지정됨
*/
    let scrollHeight = 0;
addEventListener('scroll', (event) => {
    scrollHeight = $(document).scrollTop();
    sessionStorage.setItem("scrollY", scrollHeight);
});

/**
 * 스크롤 위치 지정
 */
function savedScrollTo() {
    if (window.performance && performance.getEntriesByType("navigation")[0].type === 'back_forward'
        || performance.getEntriesByType("navigation")[0].type === 'reload') {

        const scrollY = parseInt(sessionStorage.getItem("scrollY"));
        if (scrollY && scrollY > 0) {
            window.scrollTo(0, scrollY);
        }
    }
};