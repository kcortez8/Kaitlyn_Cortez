// Start writing your Javascript

jQuery(function() {
    jQuery('#showall').click(function() {
      jQuery('.targetDiv').show();
    });
    jQuery('.showSingle').click(function() {
      jQuery('.targetDiv').hide();
      jQuery('#work' + $(this).attr('target')).show();
    });
  });


// Search Alert
function myFunction() {
  alert("Lol, like you were going to search for other things.");
}

// Sidenav

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
