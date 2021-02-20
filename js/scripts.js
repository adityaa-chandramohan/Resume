/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });

    $('#imageLink1').on('click', function () {
      $("#img1").slideToggle();
    });

    $('#imageLink2').on('click', function () {
      $("#img2").slideToggle();
    });

    $('#imageLink3').on('click', function () {
      $("#img3").slideToggle();
    });

    $('#imageLink4').on('click', function () {
      $("#img4").slideToggle();
    });

    $('#imageLink5').on('click', function () {
      $("#img5").slideToggle();
    });

    $('#imageLink6').on('click', function () {
      $("#img6").slideToggle();
    });
       
     $('#imageLink7').on('click', function () {
      $("#img7").slideToggle();
    });

})(jQuery); // End of use strict
