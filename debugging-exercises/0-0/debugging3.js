// Run the program, then correct the errors.
// The program should select an element and when it is hovered over, after the timeout time, alert the user.

function hoverAlert(el timeout)
  $(el).hover(function(event){
    $(event.currentTarget).fadeOut(timeout, function(){
      alrt('Element has been hidden)
    );
  });
}

hoverAlert("h2", 4000)
