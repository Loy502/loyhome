//4칸 스와이프
var swiper = new Swiper(".swiper2-1", {
  spaceBetween: 10, //이미지 사이 여백 px단위
  slidesPerGroup: 1, // 그룹으로 묶을 수
  loop: true, // 무한 반복
  // ↓그룹수가 맞지 않을 경우 빈칸으로 메우기
	// ↓3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
  loopFillGroupWithBlank: true,
  centeredSlides: true, //슬라이더 가운데 정렬
  autoplay: { //무한 롤링 설정
    delay: 2500,
    disableOnInteraction: false, //기본값=true 사용자가 상호작용 할 떄 자동 제생이  멈춤 (Ex_마우스로 슬라이드를 수동 전환)
  },



  breakpoints: { //뷰포트 별 롤링 스타일
    768:{
      slidesPerView: 3.8, // 동시에 보여줄 슬라이드 갯수
    },


    767: {
      slidesPerView: 2.6,
    },
    481: {
      slidesPerView: 2.6,
    },

    
    480: {
      slidesPerView: 1.8,
    },
    0: {
      slidesPerView: 1.8,
    },
  },



  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});