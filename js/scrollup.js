/* Observer scrollup 스크롤 이벤트 -------------------------------------------------- */
// Intersection Observer scrollup 생성
const observerscrollup = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 화면에 들어옴
                entry.target.classList.add("fade-in");
            }
        });
    },
    // 화면에서 해당 요소가 10% (10% = 0.1) 이상 보일 경우 화면에 들어온 것으로 판단함
    { threshold: 0.1 }
);

// 관찰 대상 설정
const targetElementsscrollup = document.querySelectorAll(".scrollup");
targetElementsscrollup.forEach((element) => {
    observerscrollup.observe(element);
});