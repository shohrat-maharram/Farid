$(document).ready(function () {

    $(".contentWrapper .content .commanItem").click(function () {
        var index = $(this).data("index");
        var images = $(".singleWrapper .left .image");
        var texts = $(".singleWrapper .right .text");

        images.each(function () {
            $(this).removeClass("active");
            if ($(this).data("index") == index) {
                $(this).addClass("active");
            }
        });

        texts.each(function () {
            $(this).removeClass("active");
            if ($(this).data("index") == index) {
                $(this).addClass("active");
            }
        });


        // $(".singleWrapper").slideDown(300,function () {
        //     $(".singleWrapper .left .image").animate(
        //         {
        //             left: "0px"
        //         },
        //         { duration: 800,
        //           complete: function () {
        //               $(".singleWrapper .right").animate({
        //                 opacity: 1,  
        //                 left: "0px",
        //                 width: "50%"
        //               }, {
        //                   duration: 800,
        //               });
        //           }
        //     });            
        // });

        $(".singleWrapper").slideDown(300, function () {
            $(".singleWrapper .left .active").animate({
                width: "30%",
                height: "30%",
                top: "300px",
                right: "-300px"
            }, {
                duration: 800,
            }).animate({
                width: "100%",
                height: "100%",
                right: "0px",
                top: "0px"
            }, {
                duration: 800,
            });

            $(".singleWrapper .right").delay(1600).animate({
                left: "0px",                
                opacity: 1
            }, {
                duration: 1000,
            });
        });
    });

    $(".singleWrapper .close").click(function () {
        $(".singleWrapper").css("display", "none");
        $(".singleWrapper .left .active").css({
            "top": "-950px",
            "width": "0%",
            "height":"0%"
        });
        $(".singleWrapper .right").css({
            "left": "-650px",
            "opacity": "0"
        });
    });

});