sessionStorage.setItem(
    `__next_scroll_${window.history.state.idx}`,
    JSON.stringify({
        x: window.pageXOffset,
        y: window.pageYOffset,
    })
);

useEffect(() => {
    window.history.scrollRestoration = 'manual';

    // 페이지 이동 후 저장되어 있던 위치로 스크롤 복원
    const _scroll = sessionStorage.getItem(`__next_scroll_${window.history.state.idx}`);
    if (_scroll) {
        // 스크롤 복원 후 저장된 위치 제거
        const { x, y } = JSON.parse(_scroll);
        window.scrollTo(x, y);
        sessionStorage.removeItem(`__next_scroll_${window.history.state.idx}`);
    }

    router.events.on('routeChangeComplete', routeChangeCompleteHandler);
    return () => {
        router.events.off('routeChangeComplete', routeChangeCompleteHandler);
    };
}, []);




/**
* 스크롤 기억 설정1 --- ios에선 스크롤 기억 기능을 지원하지 않음

window.addEventListener('pagehide', function (e) {
    sessionStorage.setItem('historyScrollTop', document.documentElement.scrollTop);
});

/**
* 스크롤 기억 설정2
* 스크롤이 움직일때마다 값을 sessionStorage에 넣어줌 --- 대부분의 pc 브라우저는 자동으로 지정됨
*/
/**
let scrollHeight = 0;
addEventListener('scroll', (event) => {
    scrollHeight = $(document).scrollTop();
    sessionStorage.setItem("scrollY", scrollHeight);
}); 

/**
 * 스크롤 위치 지정
 */
/**
function savedScrollTo() {
    if (window.performance && performance.getEntriesByType("navigation")[0].type === 'back_forward'
        || performance.getEntriesByType("navigation")[0].type === 'reload') {

        const scrollY = parseInt(sessionStorage.getItem("scrollY"));
        if (scrollY && scrollY > 0) {
            window.scrollTo(0, scrollY);
        }
    }
};
 */