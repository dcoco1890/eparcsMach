$(document).ready(function() {

    let box = $(".box");
    console.log(box);

    box.on("click", function() {
        var id = $(this).attr("data-id");
        $(this).toggleClass("boxOpen");
        $.ajax({
            type: "GET",
            url: "/scrape/" + id,
            success: function(response) {
                console.log(response);
            }
        });

    })
});