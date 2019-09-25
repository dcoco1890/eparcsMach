$(document).ready(function() {

    let box = $(".box");
    console.log(box);

    box.on("click", function() {
        var id = $(this).attr("data-id");
        var at = $(this).attr("id");
        if(at === "ran"){
           
        } else{
            $(this).attr("id", "ran");
            $.ajax({
                type: "GET",
                url: "/scrape/" + id
            }).then(response => {
                console.log(response);
                console.log($(this));
                var article = `<p class="text-info">${response.toString()}</p>`;
                $(this).find(".art-bod").append(article);
            }).catch(err => {
                console.log(err);
            });
        }
        // $(this).toggleClass("boxOpen");

      

    });
});