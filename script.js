// Variable to keep track of the highest z-index assigned
let highestZindex = 100;

$(document).ready(function() {
  // Initialize a flag on each draggable image
  $(".draggable").each(function() {
    $(this).data('wasDragged', false);
  });

  // Make images draggable with custom behavior
  $(".draggable").draggable({
    start: function(event, ui) {
      // Bring the element to the front by increasing its z-index
      $(this).css('z-index', ++highestZindex);
      // Reset the flag at the start of dragging
      $(this).data('wasDragged', false);
    },
    drag: function(event, ui) {
      // If the image is moved, mark it as dragged
      $(this).data('wasDragged', true);
    },
    stop: function(event, ui) {
      // Delay resetting the flag to ensure click events can check it
      let $this = $(this);
      setTimeout(function() {
        $this.data('wasDragged', false);
      }, 100);
    }
  });

  // Attach a click handler that only fires if the image was not dragged
  $(".draggable").on("click", function(event) {
    if ($(this).data('wasDragged')) {
      // If the image was dragged, do nothing (prevent click action)
      event.preventDefault();
      return;
    }
    // Execute click action only if it was a genuine click
    handleClick($(this).attr('alt'));
  });
});

// Function to handle click events on images
function handleClick(contributorName) {
  alert("You clicked on " + contributorName);
  // Optionally, redirect to another page:
  // window.location.href = "profile.html";
}
