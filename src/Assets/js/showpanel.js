$(document).ready(function () {
    $(".menu").click(function () {
        $("nav").toggleClass("active");
        $(this).find("i").toggleClass("fa-bars fa-times");
    });
});
$(function () {
    $("#Container").mixItUp();
});
$(window).on("scroll", function () {
    $(this).scrollTop() > 100 ? $(".header-part").addClass("header-fixed") : $(".header-part").removeClass("header-fixed");
}),
    $(".header-option-btn").on("click", function () {
        $(".header-search-option").toggle("slow"), $(".header-main-search .form-control").toggleClass("active");
    }),
    $(".header-src").on("click", function () {
        $(".header-search").toggleClass("active");
    }),
    $(function () {
        $(".navbar-dropdown a").click(function () {
            $(this).next().toggle(), $(".dropdown-list:visible").length > 1 && ($(".dropdown-list:visible").hide(), $(this).next().show());
        });
    }),
    $(function () {
        $(".nasted-menu").click(function () {
            $(this).next().toggle(), $(".nasted-menu-list:visible").length > 1 && ($(".nasted-menu-list:visible").hide(), $(this).next().show());
        });
    }),
    $(".header-menu").on("click", function () {
        $(".sidebar-part").addClass("active"),
            $(".sidebar-cross").on("click", function () {
                $(".sidebar-part").removeClass("active");
            });
    }),
    $(".feature-bookmark button").on("click", function () {
        $(this).toggleClass("active");
    }),
    $(".product-widget .fa-heart").on("click", function () {
        $(this).toggleClass("fas");
    }),
    $(".eye").on("click", function () {
        $(".eye").toggleClass("fa-eye-slash"), $(".eye").toggleClass("fa-eye");
        var e = $("#pass");
        "password" === e.attr("type") ? e.attr("type", "text") : e.attr("type", "password");
    }),
    $(".navbar-widget li").on("click", function () {
        $(".navbar-widget li").removeClass("active"), $(this).addClass("active");
    }),
    $(".navbar-user").on("click", function () {
        $(".sidebar-part").addClass("active"),
            $(".cross-btn").on("click", function () {
                $(".sidebar-part").removeClass("active");
            });
    }),
    $(".edit-btn").on("click", function () {
        $(".edit-option").addClass("active"),
            $(".cancel").on("click", function () {
                $(".edit-option").removeClass("active");
            });
    }),
    $(".grid-hori").on("click", function () {
        $(".grid-hori").addClass("active"),
            $(".card-grid").addClass("col-sm-12"),
            $(".card-grid").addClass("col-md-12"),
            $(".card-grid").addClass("col-lg-12"),
            $(".product-card").addClass("inline"),
            $(".grid-verti").removeClass("active"),
            $(".grid-verti").on("click", function () {
                $(".grid-verti").addClass("active"),
                    $(".grid-hori").removeClass("active"),
                    $(".card-grid").removeClass("col-sm-12"),
                    $(".card-grid").removeClass("col-md-12"),
                    $(".card-grid").removeClass("col-lg-12"),
                    $(".product-card").removeClass("inline");
            });
    });
let tabButton = document.querySelectorAll(".tab-btn"),
    tabPanel = document.querySelectorAll(".tab-panel");

function showPanel(e) {
    tabPanel.forEach(function (e) {
        e.style.display = "none";
    }),
        (tabPanel[e].style.display = "block");
}
showPanel(0);