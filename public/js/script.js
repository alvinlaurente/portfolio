// Navbar toggler
$(".navbar-toggler").click(function () {
  $("nav").toggleClass("custom-navbar-collapse");
})

// Parallax
$(window).scroll(() => {
  let windowScroll = $(this).scrollTop();

  // Introduction Text Parallax
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

// Slick-carousel Cards
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

// Lazy Load
(function () {
  function logElementEvent(eventName, element) {
    console.log(Date.now(), eventName, element.getAttribute("data-src"));
  }

  var callback_enter = function (element) {
    logElementEvent("🔑 ENTERED", element);
  };
  var callback_exit = function (element) {
    logElementEvent("🚪 EXITED", element);
  };
  var callback_loading = function (element) {
    logElementEvent("⌚ LOADING", element);
  };
  var callback_loaded = function (element) {
    logElementEvent("👍 LOADED", element);
  };
  var callback_error = function (element) {
    logElementEvent("💀 ERROR", element);
    element.src =
      "https://via.placeholder.com/440x560/?text=Error+Placeholder";
  };
  var callback_finish = function () {
    logElementEvent("✔️ FINISHED", document.documentElement);
  };
  var callback_cancel = function (element) {
    logElementEvent("🔥 CANCEL", element);
  };

  var ll = new LazyLoad({
    threshold: 0,
    // Assign the callbacks defined above
    callback_enter: callback_enter,
    callback_exit: callback_exit,
    callback_cancel: callback_cancel,
    callback_loading: callback_loading,
    callback_loaded: callback_loaded,
    callback_error: callback_error,
    callback_finish: callback_finish
  });
})();