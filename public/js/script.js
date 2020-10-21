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

const slickSettings = {
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1500,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
    breakpoint: 568,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
    breakpoint: 343,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
    breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

$(".skill-cards").slick(slickSettings)