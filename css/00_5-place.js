
/**
* 스크롤이 움직일때마다 값을 sessionStorage에 넣어줌
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