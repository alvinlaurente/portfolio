// Navbar toggler custom
$(".navbar-toggler").click(function () {
  $("nav").toggleClass("custom-navbar-collapse");
})

// Parallax Elements - Doesn't work with fullPage autoScrolling = true
$(window).scroll(() => {
  let windowScroll = $(this).scrollTop();

  $(".intro-content").css({
    'transform': 'translate(0px, ' + windowScroll / 6 + '%)'
  });

  $(".contact-button img").css({
    'transform': 'translate(0px, ' + windowScroll / 12 + '%)'
  });

  $(".relevant-skill h1").css({
    'transform': 'translate(0px, ' + windowScroll / 24 + '%)'
  });
});

// Slick - Carousel Cards
const slickSettings = {
  arrows: false,
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
};

$(".skill-cards").slick(slickSettings);

// Vanilla Lazy Load
(function () {
  function logElementEvent(eventName, element) {
    console.log(Date.now(), eventName, element.getAttribute("data-src"));
  }

  const callback_error = function (element) {
    element.src =
      "https://via.placeholder.com/440x560/?text=Error+Placeholder";
  };

  const ll = new LazyLoad({
    threshold: 0,
    // Assign the callbacks defined above
    callback_error: callback_error
  });
})();

// fullPage setting just to make navigation
new fullpage("#fullpage", {
  autoScrolling: false,
  scrollingSpeed: 0,
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: ['Hello', 'Services', 'Stacks Learned'],
  lazyLoading: false, // Disable fullPage lazyloading feature
});