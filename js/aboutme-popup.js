//자기소개서 레이어창 클로즈 버튼
$(document).ready(function () {
    $("#openModalPop").click(function () {
        $("#banner_online").fadeIn();
    });

    //자기소개서 레이어창 닫기-1
    $("#close_button").click(function () {
        $("#banner_online").fadeOut();
    });

    //자기소개서 레이어창 닫기-2
    $("#close_button1").click(function () {
        $("#banner_online").fadeOut();
    });
});


/* 자기소개서 창 & 팝업 오픈 시 배경 스크롤 방지 - 참고 링크 : https://on-slow.tistory.com/29 */
function popOpen() {
    $('.banner_online, .show').show();
    $('html, body, #wrapper').css('overflow', 'hidden')
}


//자기소개서 레이어 팝업 종료 시 아래 스크롤 상단 위치





// 모달이 닫혔을 때 스크롤을 활성화 한다.