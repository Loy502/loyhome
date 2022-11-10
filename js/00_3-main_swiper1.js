//스와이프 무한 루프 액션--------------------------------------------------
var swiper = new Swiper(".swiper1", {
  //무한 루프 설정
  slidesPerView: 1,
  spaceBetween: 0, //이미지 사이 여백
  loop: true,
  //슬라이더 가운데 정렬
  centeredSlides: true,
  //무한 롤링 설정
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  //페이지네이션 클릭 설정
  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
  },
  //이전 다음 버튼 클릭 설정
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
});