$(function() {

  // create a new burger
  $('#burger-form').on("submit", function(e) {
    e.preventDefault();

    var newBurger = { name: $("#burger").val().trim() }

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );

  })

  // devour a burger
  $('.eat-burger').on('click', function(e) {
    var burger = $(this).parent();
    var burgerID = burger.data('id');
    
    var devoured = (burger.data('devoured') === false) ? true : false;
    var newBurger = { devoured: devoured };

    $.ajax("/api/burgers/" + burgerID, {
      type: "PUT",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  })



  // delete a burger
  $('.remove-burger').on('click', function(e) {
    var burgerID = $(this).parent().data('id');

    $.ajax("/api/burgers/" + burgerID, {
      type: "DELETE"
    }).then(
      function() {
        location.reload();
      }
    );
  })



})