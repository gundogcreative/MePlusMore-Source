// meplusmore scripts


// On Browser Window Resize Add/Remove Collapse Class to Main Navigation
window.onresize = function() {
  if (window.innerWidth >= 768) {
    $('#menuNav').removeClass('collapse');
  } else if (window.innerWidth <= 767) {
    $('#menuNav').addClass('collapse');
  }
};


// On Page Load Add/Remove Collapse Class to Main Navigation
$(document).ready(function(e) { 
  if (window.innerWidth >= 768) {
    $('#menuNav').removeClass('collapse');
  } else if (window.innerWidth <= 767) {
    $('#menuNav').addClass('collapse');
  }
});


// Mobile Navigation - Toggle bars / close icon
$('#mobileNavControl').click(function() {
  $("#mobileNavControl i").toggleClass("fa-bars");
  $("#mobileNavControl i").toggleClass("fa-times");
});




// HERO Parallax Images
$('#hero.features').parallax({imageSrc: 'assets/img/meplusmore_hero-features.jpg'});


// WOW Animation Add-on
new WOW().init();