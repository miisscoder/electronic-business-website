$(document).ready(function () {
    $("ul.tabs li").click(function () {
        $("ul.tabs li").attr("data-active", "false");
        $(this).attr("data-active", "true");
        var val = $(this).attr("data-value");

        $(".tab-content").attr("data-active", "false");
        $(".tab-content[data-value='" + val + "']").attr("data-active", "true");

    });

  
});