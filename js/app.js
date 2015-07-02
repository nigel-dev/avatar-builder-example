/*
* Document setup.
*/

$(document).ready(function() {
  $('#slider1').tinycarousel({
    bullets: true
  });
});

/*
 * Click Actions.
 */

$("#hairstyles, #faces, #hats, #shirts, #torsos, #other").click(function(event) {

  // Store which parent item triggered the menu display.
  localStorage.setItem("selectedArea", event.target.id);
  document.getElementById("selectedArea").innerHTML = event.target.id;
  toggleMenuDisplay();
});

$("#doneButton").click(function(event) {
  toggleMenuDisplay();
});




$('#leftNavigationArrow').click(function() {
  $('#picker').trigger('backward');
});

$('#rightNavigationArrow').click(function() {
  $('#picker').trigger('forward');
});

/*
 * Utility Functions.
 */

function toggleMenuDisplay() {

  if ($('#builderMenu').is(':visible')) {
    $("#builderMenu").fadeOut("slow", function() {
      $("#builderSlideMenu").fadeIn("slow", function() {
         $('#demo').tinycarousel();
      });
    });

  } else {
    $("#builderSlideMenu").fadeOut("slow", function() {
      $("#builderMenu").fadeIn("slow", function() {});
    });
  }
}

$('.overview li').click(function (event) {
    alert($(this).index());

    localStorage.setItem(localStorage.getItem("selectedArea"), $(this).index());

});
