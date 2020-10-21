// Navbar toggler
$(".navbar-toggler").click(function () {
  $("nav").toggleClass("custom-navbar-collapse");
})

// Parallax
$(window).scroll(() => {
  let windowScroll = $(this).scrollTop();

  // Introduction Text Parallax
  $(".intro-content").css({
    'transform': 'translate(0px, ' + windowScroll / 4 + '%)'
  });

  $(".contact-button img").css({
    'transform': 'translate(0px, ' + windowScroll / 1.05 + '%)'
  });
});

// Slick-carousel Cards
const slickSettings = {
  arrows: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3500,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        autoplaySpeed: 4000
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplaySpeed: 3000
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplaySpeed: 3000
      }
    },
    {
    breakpoint: 568,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplaySpeed: 2000
      }
    },
    {
    breakpoint: 343,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplaySpeed: 1500
      }
    },
    {
    breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1000
      }
    }
  ]
}

$(".skill-cards").slick(slickSettings)