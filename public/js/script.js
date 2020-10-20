// Navbar toggler
$(".navbar-toggler").click(function () {
  $("nav").toggleClass("custom-navbar-collapse");
})

// Parallax
$(window).scroll(() => {
  let windowScroll = $(this).scrollTop();

  // Introduction Text Parallax
  $(".introContent").css({
    'transform': 'translate(0px, ' + windowScroll / 4 + '%)'
  });

  $(".contactButton img").css({
    'transform': 'translate(0px, ' + windowScroll / 1.05 + '%)'
  });
});