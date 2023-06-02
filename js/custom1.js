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
            $(".back2_1>img").stop().animate({bottom:"100px",opacity:"1"},500);
            $(".back2>img").stop().animate({bottom:"100px",opacity:"1"},600);
            $(".back3 li:nth-of-type(1)>img").css({marginLeft:"0%",opacity:"1"},1000);
            $(".back3 li:nth-of-type(2)>img").css({marginRight:"0%",opacity:"1"},1000);
            $(".back3 li:nth-of-type(3)>img").css({marginLeft:"0%",opacity:"1"},1000);
        } else {

        };
    });

    $("header>img").on("mouseenter",function(){
        $(".text1").stop().slideDown();    
        $(".text1").on("mouseleave",function(){
            $(".text1").stop().slideUp();
        });
    });

});