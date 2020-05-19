// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devourBtn").on("click", function(event) {
      let id = $(this).data("id");
      var newDevour = $(this).data(newDevour);
      console.log('newDevour:', newDevour)

      var newDevourStatus = {
          id,
            devoured: true
        };
      
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourStatus
      }).then(
        function() {
          console.log("Burger was devoured!", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".burgerAdd").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("click")
        
     const eaten = $('#eaten').is(":checked")
     console.log('eaten:', eaten)

      var newBurger = {
        name: $("#burgerName").val().trim(),
        devoured: $('#eaten').is(":checked")
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});