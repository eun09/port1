$(function(){
    setInterval(function(){
        $(".back1").stop().animate({marginLeft:"-100%"},function(){
            $(".back1").css({marginLeft:"0px"});
            $(".back1_1").first().appendTo(".back1")
        });
    },3000);



    $(".text3 li").on("click",function(){
        $(".text3 li").removeClass("on");
        $(this).addClass("on");
        $(".circle1").removeClass("on");
        $(this).children(".circle1").addClass("on");
    });


    $(".text3 li:nth-of-type(1)").on("click",function(){
        $(".text4_1").show();
        $(".text4_2").hide();
        $(".text4_3").hide();
        $(".im1 li:nth-of-type(1)").show();
        $(".im1 li:nth-of-type(2)").hide();
        $(".im1 li:nth-of-type(3)").hide();
    }); 
    $(".text3 li:nth-of-type(2)").on("click",function(){
        $(".text4_1").hide();
        $(".text4_2").show();
        $(".text4_3").hide();
        $(".im1 li:nth-of-type(1)").hide();
        $(".im1 li:nth-of-type(2)").show();
        $(".im1 li:nth-of-type(3)").hide();
    }); 
    $(".text3 li:nth-of-type(3)").on("click",function(){
        $(".text4_1").hide();
        $(".text4_2").hide();
        $(".text4_3").show();
        $(".im1 li:nth-of-type(1)").hide();
        $(".im1 li:nth-of-type(2)").hide();
        $(".im1 li:nth-of-type(3)").show();
    }); 

    $(".next").on("click", function () {
        $(".circle3_1")
            .stop()
            .animate({marginLeft: "-200%" }, function () {
                $(".circle3_1 li").first().appendTo(".circle3_1");
                $(".circle3_1").css({marginLeft: "-100%" });
            });
    });
    $(".prev").on("click", function () {
        $(".circle3_1")
            .stop()
            .animate({ marginLeft: "0%" }, function () {
                $(".circle3_1 li").last().prependTo(".circle3_1");
                $(".circle3_1").css({marginLeft: "-100%" });
            });
    });

    $("header>img").on("mouseenter",function(){
        $(".text1").stop().slideDown();    
        $(".text1").on("mouseleave",function(){
            $(".text1").stop().slideUp();
        });
    });
});