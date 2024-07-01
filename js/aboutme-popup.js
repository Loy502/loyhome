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




//자기소개서 레이어 팝업 종료 시 아래 스크롤 상단 위치
$("#pop_content").
    modal.scrollTop; // O
modal.scrollTop(0); // X
modal.scrollTo(0, 0);  // O
modal.animate({ scrollTop: 0 });  // X


//자기소개서 레이어 팝업 호출 시 바디 스크롤 방지 참고 링크 - 
