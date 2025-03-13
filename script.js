// Start with an initial high z-index value
let highestZindex = 100;

$(document).ready(function(){
  // Enable draggable functionality for images and update z-index on drag start
  $(".draggable").draggable({
    start: function(event, ui) {
      $(this).css('z-index', ++highestZindex);
    }
  });
});

// Function to handle click events on images.
function handleClick(contributorName) {
  //alert("You clicked on " + contributorName);
  // Optionally, redirect to another page:
  // window.location.href = "profile.html";
}
