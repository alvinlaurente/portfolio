$(window).scroll(() => {
  let windowScroll = $(this).scrollTop();

  $('.introContent').css({
    'transform': 'translate(0px, ' + windowScroll / 4 + '%)'
  });
});