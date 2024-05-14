!(function ($) {
    ("use strict");
    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on("click", ".navbar a, .scrollto", function (e) {
        if (
            window.location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
                window.location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            if (target.length) {
                e.preventDefault();

                var scrollto = target.offset().top;

                $("html, body").animate(
                    {
                        scrollTop: scrollto,
                    },
                    500,
                    "easeInOutExpo"
                );

                if ($(this).parents(".container").length) {
                    $(".navbar .active").removeClass("active");
                    $(this).closest("li").addClass("active");
                }

                if ($("body").hasClass("mobile-nav-active")) {
                    $("body").removeClass("mobile-nav-active");
                    $(".mobile-nav-toggle i").toggleClass(
                        "icofont-navigation-menu icofont-close"
                    );
                }
                return false;
            }
        }
    });

})(jQuery);