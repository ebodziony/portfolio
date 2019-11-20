var yourNavigation = $("#navbar");
    stickyDiv = "sticky";
    introH = $('#intro').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > introH ) {
    yourNavigation.addClass(stickyDiv);
  } else {
    yourNavigation.removeClass(stickyDiv);
  }
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  //if (scrollDistance >= 850) {
  //		$('nav').fadeIn("fast");
  //} else {
  //		$('nav').fadeOut("fast");
  //}

  // Assign active class to nav links while scolling
  $('.page-section').each(function(i) {
      if ($(this).position().top - 40 <= scrollDistance) {
          $('.menubutton a.active').removeClass('active');
          $('.menubutton a').eq(i).addClass('active');
      }
  });
}).scroll();
