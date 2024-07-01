//스크롤 연동 fade-in fade-out
$(".pop_content").on("load", function () {
    function fade() {
      let animation_height = $(".pop_content").innerHeight() * 0.5;
      let ratio = Math.round((1 / animation_height) * 10000) / 10000;
      $(".fade").each(function () {
        let objectTop = $(this).offset().top;
        let contentBottom = $(".pop_content").scrollTop() + $(".pop_content").innerHeight();
        if (objectTop < contentBottom) {
          if (objectTop < contentBottom - animation_height) {
            $(this).css({
              transition: "opacity 0.1s linear",
              transition: "left 0.1s linear",
              opacity: 0,
              left: "0px",
            });
          } else {
            $(this).css({
              transition: "opacity 0.5s linear",
              opacity: (contentBottom - objectTop) * ratio,
              transition: "left 0.5s linear",
              left: `${200 * (1 - (contentBottom - objectTop) * ratio)}px`,
            });
          }
        } else {
          $(this).css({
            opacity: 1,
            left: "200px",
          });
        }
      });
    }
    $(".fixed").css({
      opacity: 1,
      left: "200px",
    });
    fade();

    $(".pop_content").scroll(function () {
      fade();
    });
  });