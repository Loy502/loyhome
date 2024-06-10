/**
* 스크롤 기억 설정1 --- ios에선 스크롤 기억 기능을 지원하지 않음
*/
window.addEventListener('pagehide', function(e){
    sessionStorage.setItem('historyScrollTop' , document.documentElement.scrollTop);
});