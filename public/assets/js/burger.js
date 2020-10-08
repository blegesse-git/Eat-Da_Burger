$(function(){
    $("#submit").on("click", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0
        }
        console.log(newBurger)

       
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("A new burger is added")
            location.reload();
        });


    });

    $(".eatburger").on("click", function(event){
        

        var id = $(this).data("id")
        var devouredBurger = {
            devoured: 1
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(function(){
            console.log("You just ate a burger")
            location.reload()
        });
    });
});
