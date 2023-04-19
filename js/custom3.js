$(function(){
    $(".con").on("mouseenter",function(){
        vid = $(this).find("video").get(0);
        vid.play();
        $(this).stop().animate({width:"35%"})
        $(this).children("h3").stop().animate({right:"5%"},2000)
        $(this).children("p").stop().animate({right:"5%"},3000)
        $(this).children("video").stop().animate({opacity:"0.7"},1000)
    });
    $(".con").on("mouseleave",function(){
        vid.pause();
        $(this).stop().animate({width:"12%"})
        $(this).children("h3").stop().animate({right:"-30%"})
        $(this).children("p").stop().animate({right:"-250%"})
        $(this).children("video").stop().animate({opacity:"0"})
    });
});