// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 300);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('navbar_down').addClass('navbar_up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('navbar_up').addClass('navbar_down');
        }
    }
    

    //슬라이드 업 메뉴바 숨기는 구간 설정
    if(Math.abs(lastScrollTop - st) >= delta)
        return;

    if (st < lastScrollTop && st < navbarHeight){
        // Scroll Down
        $('nav').removeClass('navbar_down').addClass('navbar_up');
    } else {
        // Scroll Up
        if(st + $(window).height() > $(document).height()) {
            $('nav').removeClass('navbar_up').addClass('navbar_down');
        }
    }
}


    

