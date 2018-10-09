$(document).ready(function () {

    var myinterval;
    var startInterval = 0;
    var myInt;
    var myintervalCall;
    var intervalCount = 0;

    $(".sliderWrapper .slideItem").click(function () {
        var active = $(".sliderWrapper .active");
        var allSlides = $(".sliderWrapper .slideItem");
        var slides = $(".singleWrapper .slideItem");
        var This = $(this);
        var dataSlide;

        var newActiveLeft;
        if (active.data("slide") <= $(this).data("slide")) {
            if ((allSlides.length - $(this).data("slide")) < 5) {
                allSlides.each(function () {
                    $(this).removeClass("active");
                    if ($(this).data("slide") == (This.data("left") + 5)) {
                        $(this).addClass("active");
                    }
                });
            } else {
                $(".sliderWrapper .active").removeClass("active");
                $(this).addClass("active");
            }
        } else {
            if ($(this).data("slide") <= 5) {
                allSlides.each(function () {
                    $(this).removeClass("active");
                    if ((This.data("left") + 5) == $(this).data("slide")) {
                        $(this).addClass("active");
                    }
                });
            } else {
                $(".sliderWrapper .active").removeClass("active");
                $(this).addClass("active");
            }

        }

        slides.each(function () {
            $(this).removeClass("active");
            if ($(this).data("left") == This.data("left")) {
                $(this).addClass("active");
            }
        });


        newActiveLeft = (-77 - (This.data("left") - 1) * 171.59375);
        $(".sliderWrapper .slides").css("left", newActiveLeft);

        if (intervalCount == 0) {
            startInterval = 1;
            clearInterval(myinterval);
            myInt = setInterval(function () {
                startInterval++;
                if (startInterval > 31) {
                    clearInterval(myInt);
                    myintervalCall = setInterval(callInterval, 100);
                }
            }, 1000);
            intervalCount = 1;
        }

    })


    function changeSlide(Direction) {
        var allSlides = $(".sliderWrapper .slideItem");
        var direction = Direction;
        var slideLeft;
        var active = $(".sliderWrapper .active");
        var activeNext = active.next();
        var activePrev = active.prev();
        var slides = $(".singleWrapper .slideItem");
        var dataSlide;

        if (direction == "next") {
            if (active.data("slide") == (allSlides.length - 5)) {
                allSlides.each(function () {
                    if ($(this).data("slide") == 6) {
                        active.removeClass("active");
                        $(this).addClass("active");
                    }
                });
                dataSlide = 6;
                slideLeft = -77;
            } else {
                active.removeClass("active");
                activeNext.addClass("active");
                dataSlide = (active.data("slide") + 1)
                slideLeft = (-77 - (active.data("left") * 171.59375));
            }

        } else if (direction == "prev") {
            if (active.data("slide") == 6) {
                allSlides.each(function () {
                    if ($(this).data("slide") == (allSlides.length - 5)) {
                        active.removeClass("active");
                        $(this).addClass("active");
                    }
                });
                dataSlide = allSlides.length - 5;
                slideLeft = (-77 - ((allSlides.length - 11) * 171.59375));
            } else {
                active.removeClass("active");
                activePrev.addClass("active");
                dataSlide = (active.data("slide") - 1);
                slideLeft = (-77 - ((active.data("left") - 2) * 171.59375));
            }
        }

        $(".sliderWrapper .slides").css("left", slideLeft);

        slides.each(function () {
            $(this).removeClass("active");
            if ($(this).data("slide") == dataSlide) {
                $(this).addClass("active");
            }
        })
    }


    $(".arrows").click(function () {
        var direction = $(this).data("dir");
        var This = $(this);
        changeSlide(direction);

        if (intervalCount == 0) {
            startInterval = 1;
            clearInterval(myinterval);
            myInt = setInterval(function () {
                startInterval++;
                if (startInterval > 31) {
                    clearInterval(myInt);
                    myintervalCall = setInterval(callInterval, 100);
                }
            }, 1000);
            intervalCount = 1;
        }

    });

    function callInterval() {
        if (startInterval >= 30 || startInterval == 0) {
            myinterval = setInterval(function () { changeSlide("next"); }, 3000);
            startInterval = 0;
            intervalCount = 0;
            clearInterval(myintervalCall);
        }
    }

    myintervalCall = setInterval(callInterval, 100);

}); 