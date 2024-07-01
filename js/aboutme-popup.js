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




//팝업 아래 스크롤 막기


//자기소개서 레이어 팝업 호출 시 바디 스크롤 방지 참고 링크 - 
