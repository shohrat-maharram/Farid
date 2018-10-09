$(document).ready(function () {

    $(".contentWrapper .content .commanItem").click(function () {
        var index=$(this).data("index");
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
             $(".singleWrapper .left .image").animate({
                 left: "0px"
             }, {
                 duration: 800,
             });

             $(".singleWrapper .right").animate({
                 left: "0px"
             }, {
                 duration: 1000,
             });
         });
    });

    $(".singleWrapper .close").click(function () {
        $(".singleWrapper").css("display", "none");
        $(".singleWrapper .left .image").css("left", "-1000px");
        $(".singleWrapper .right").css("left","-1850px");
    });

}); 