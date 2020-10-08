$(".burger-form").on("submit", function(event){
    event.preventDefault();

    var newBurger = {
        burger_name: $("#newburger").val().trim(),
        devoured: 0
    }

    // send this new info to the db 
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function(){
        console.log("A new burger is added")
        location.reload();
    });


});