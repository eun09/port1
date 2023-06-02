$(function(){
    let baseline = -550;
    let pos1 = $("header").offset().top;
    let pos2 = $("#visual").offset().top;
    let pos3 = $("#container").offset().top + baseline;
    let pos4 = $("footer").offset().top;

    $(window).on("scroll",function(){
        let scroll = $(this).scrollTop();

        if (scroll >= pos1 && scroll < pos2) {

        } else if (scroll >= pos2 && scroll < pos3) {

        } else if (scroll >= pos3 && scroll < pos4) {
            $(".new li").stop().animate({marginTop:"0px",opacity:"1"})
        } else {

        }
    });

    $("header>img").on("mouseenter",function(){
        $(".text1").stop().slideDown();    
        $(".text1").on("mouseleave",function(){
            $(".text1").stop().slideUp();
        });
    });

});