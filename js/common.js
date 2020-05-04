$(document).ready(function () {

    // head dropdown
    $("#all").mouseenter(function () {
        $("#dropdown").attr("data-open", "true");
    });

    $("#dropdown").mouseleave(function () {
        $("#dropdown").attr("data-open", "false");

        $(".dropdown li").attr("data-active", "false");
        $(".dropdown li[data-value = '1']").attr("data-active", "true");
        $(".tab-contents").attr("data-active", "false");
        $(".tab-contents[data-value = '1']").attr("data-active", "true");
    });

    $(".dropdown li").hover(function () {
        var selected = $(this).attr("data-value");
        $("ul.tabs").attr("data-selected", selected);
        $(".dropdown li").attr("data-active", "false");
        $(this).attr("data-active", "true");
        $(".tab-contents").attr("data-active", "false");
        $(".tab-contents[data-value = '" + selected + "']").attr("data-active", "true");
    });

    $(".suspension-menus a.suspension-menu-item").mouseenter(function () {
        $(".suspension-menus a.suspension-menu-item").attr("data-active", "false");
        $(this).attr("data-active", "true");
        var val = $(this).attr("data-value");
        $(".suspension-menus .pop-submenu").attr("data-active", "false");
        $(".suspension-menus .pop-submenu[data-value='" + val + "']").attr("data-active", "true");
    });

    $(".suspension-menus .pop-submenu").mouseleave(function () {
        $(".suspension-menus a.suspension-menu-item").attr("data-active", "false");
        $(".suspension-menus .pop-submenu").attr("data-active", "false");

    });
    // toTop
    $("#toTop").click(function () {
        window.scrollTo(0, 0);
    });
    // tab
    $(".tab").mouseenter(function () {
        var selected = $(this).attr("data-value");
        $(this).parent(".tabs").children(".tab")
            .attr("data-active", "false");
        $(this).attr("data-active", "true");
        $(this).parent(".tabs").parent(".tab-container")
            .children(".tab-contents")
            .children(".tab-content")
            .attr("data-active", "false");
        $(this).parent(".tabs").parent(".tab-container")
            .children(".tab-contents")
            .children(".tab-content[data-value = '" + selected + "']")
            .attr("data-active", "true");
    });
    // suspensionmenus
    function suspensionmenus() {
        var scroll = $(window).scrollTop();

        if (scroll > 810) {
            $(".suspension-menus").css({ "position": "fixed", "top": "48px" });
        } else {
            $(".suspension-menus").css({ "position": "absolute", "top": "858px" });
        }
    }

    function suspension() {
        var scroll = $(window).scrollTop();

        if (scroll > 810) {
            $(".suspension").css({ "position": "fixed", "top": "48px" });
        } else {
            $(".suspension").css({ "position": "absolute", "top": "858px" });
        }
    }

    suspension();

    suspensionmenus();

    $(window).scroll(function (event) {
        suspensionmenus();
        suspension();
    });

    // button radio

    $(".btn-radio").click(function () {
        $(this).parent(".btns-radio").children(".btn-radio").attr("data-checked", "false");
        $(this).attr("data-checked", "true");
    });

    // modal
    $(".btn-modal").click(function () {
        var id = $(this).attr("data-id");
        $(".modal-bk").attr("data-open", "true");
        $("#" + id).attr("data-open", "true");
    });

    $(".btn-modal-close").click(function () {
        $(this).parents(".modal").attr("data-open", "false");
        $(".modal-bk").attr("data-open", "false");
    });


    $(".modal-bk").click(function () {
        $(".modal").attr("data-open", "false");
        $(this).attr("data-open", "false");
    });


});


function ValidateNumber(e, pnumber) {
    if (!/^\d+$/.test(pnumber)) {
        $(e).val(/^\d+/.exec($(e).val()));
    }
    return false;
}