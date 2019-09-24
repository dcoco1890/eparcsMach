$(document).ready(function() {

    let box = $(".box");
    console.log(box);

    box.on("click", function() {
        var id = $(this).attr("data-id");
        $(this).toggleClass("boxOpen");

        $.ajax({
            type: "GET",
            url: "/scrape/" + id
        }).then(response => {
            console.log(response);
            console.log($(this));
            var article = `<div class="text-center"><p class="text-info">${response.toString()}</p></div>`;
            $(this).append(article);
        }).catch(err => {
            console.log(err);
        });

    });
});