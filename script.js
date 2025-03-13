$(document).ready(function(){
  $(".draggable").draggable();
});

function handleClick(contributorName) {
  alert("You clicked on " + contributorName);
  // Optional: window.location.href = "profile.html";
}
