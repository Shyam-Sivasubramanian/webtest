$(document).ready(function(){
  // Enable draggable functionality for images
  $(".draggable").draggable();
});

// Function to handle click events on images.
function handleClick(contributorName) {
  alert("You clicked on " + contributorName);
  // Optionally, you can redirect to a detailed page:
  // window.location.href = "profile.html";
}
