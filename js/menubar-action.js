/*마우스 스크롤 메뉴 숨김 이벤트 시작--------------------------------------------------*/
var lastScrollTop = 0, delta = 1;   // delta<동작의 구현이 시작되는 위치 
$(window).scroll(function(){
    var scrollTop = $(this).scrollTop() /* 스크롤바 수직 위치를 가져옵니다, 괄호 안에 값(value)이 있을 경우 스크롤바의 수직 위치를 정합니다. */
    // Math.abs: 주어진 숫자의 절대값을 반환(return)합니다.
    if(scrollTop >= 1) { // 숫자에 따라 아래로 스크롤 했을 때 사라지는 영역의 크기가 바뀝니다.

    if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) {
    	/* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
        $(".gnb_bar").css("top","-107px");
    } else {
        $(".gnb_bar").css("top","56px");
    }
    lastScrollTop = scrollTop;
    }
});