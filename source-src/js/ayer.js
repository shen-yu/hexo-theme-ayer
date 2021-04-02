(function ($) {
  // Search
  let $searchWrap = $(".search-form-wrap"),
    isSearchAnim = false,
    searchAnimDuration = 200;

  const startSearchAnim = () => {
    isSearchAnim = true;
  };

  const stopSearchAnim = (callback) => {
    setTimeout(function () {
      isSearchAnim = false;
      callback && callback();
    }, searchAnimDuration);
  };

  $(".nav-item-search").click(() => {
    if (isSearchAnim) return;
    startSearchAnim();
    $searchWrap.addClass("on");
    stopSearchAnim(function () {
      $(".local-search-input").focus();
    });
  });

  $(document).mouseup((e) => {
    const _con = $(".local-search");
    if (!_con.is(e.target) && _con.has(e.target).length === 0) {
      $searchWrap.removeClass("on");
    }
  });

  // Not recommended in mobile, /search.xml is actually large.
  if ($(".local-search").size()) {
    $.getScript("/js/search.js", function () {
      searchFunc("/search.xml", "local-search-input", "local-search-result");
    });
  }

  // Mobile Detect
  const isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    },
  };

  // Share
  $(".share-outer").click(() => $(".share-wrap").fadeToggle());

  // Lazyload
  $("img.lazy").lazyload({
    effect: "fadeIn",
  });

  // JustifiedGallery
  $("#gallery").justifiedGallery({
    rowHeight: 200,
    margins: 5,
  });

  // ScrollDown
  $(document).ready(function ($) {
    $(".anchor").click(function (e) {
      e.preventDefault();
      $("main").animate({ scrollTop: $(".cover").height() }, "smooth");
    });
  });

  // To Top
  (() => {
    // When to show the scroll link
    // higher number = scroll link appears further down the page
    const upperLimit = 1000;

    // Our scroll link element
    const scrollElem = $("#totop");

    // Scroll to top speed
    const scrollSpeed = 1000;

    // Show and hide the scroll to top link based on scroll position
    scrollElem.hide();
    $(".content").scroll(function () {
      const scrollTop = $(".content").scrollTop();
      if (scrollTop > upperLimit) {
        $(scrollElem).stop().fadeTo(200, 0.6); // fade back in
      } else {
        $(scrollElem).stop().fadeTo(200, 0); // fade out
      }
    });

    // Scroll to top animation on click
    $(scrollElem).click(function () {
      $(".content").animate({ scrollTop: 0 }, scrollSpeed);
      return false;
    });
  })();

  // Mobile Nav
  const $content = $(".content"),
    $sidebar = $(".sidebar");

  $(".navbar-toggle").on("click", function () {
    $(".content,.sidebar").addClass("anim");
    $content.toggleClass("on");
    $sidebar.toggleClass("on");
  });

  // Reward
  $("#reward-btn").click(() => {
    $("#reward").fadeIn(150);
    $("#mask").fadeIn(150);
  });
  $("#reward .close, #mask").click(() => {
    $("#mask").fadeOut(100);
    $("#reward").fadeOut(100);
  });

  // DarkMode
  if (sessionStorage.getItem("darkmode") == 1) {
    $("body").addClass("darkmode");
    $("#todark i").removeClass("ri-moon-line").addClass("ri-sun-line");
  } else {
    $("body").removeClass("darkmode");
    $("#todark i").removeClass("ri-sun-line").addClass("ri-moon-line");
  }
  $("#todark").click(() => {
    if (sessionStorage.getItem("darkmode") == 1) {
      $("body").removeClass("darkmode");
      $("#todark i").removeClass("ri-sun-line").addClass("ri-moon-line");
      sessionStorage.removeItem("darkmode");
    } else {
      $("body").addClass("darkmode");
      $("#todark i").removeClass("ri-moon-line").addClass("ri-sun-line");
      sessionStorage.setItem("darkmode", 1);
    }
  });

  // ShowThemeInConsole
  const ayerInfo = "主题不错？⭐star 支持一下 ->";
  const ayerURL = "https://github.com/Shen-Yu/hexo-theme-ayer";
  const ayerNameStr =
    "\n\n     _ __   _______ _____    \n    / \\ \\ \\ / / ____|  _  \\  \n   / _ \\ \\ V /|  _| | |_) |  \n  / ___ \\ | | | |___|  _ <   \n /_/   \\_\\ _| |_____|_| \\__\\ \n";
  const ayerInfoStyle =
    "background-color: #49b1f5; color: #fff; padding: 8px; font-size: 14px;";
  const ayerURLStyle =
    "background-color: #ffbca2; padding: 8px; font-size: 14px;";
  const ayerNameStyle = "background-color: #eaf8ff;";

  console.log(
    "%c%s%c%s%c%s",
    ayerInfoStyle,
    ayerInfo,
    ayerURLStyle,
    ayerURL,
    ayerNameStyle,
    ayerNameStr
  );
})(jQuery);

// Tracking
!(function (p) {
  "use strict";
  !(function (t) {
    var s = window,
      e = document,
      i = p,
      c = "".concat(
        "https:" === e.location.protocol ? "https://" : "http://",
        "sdk.51.la/js-sdk-pro.min.js"
      ),
      n = e.createElement("script"),
      r = e.getElementsByTagName("script")[0];
    (n.type = "text/javascript"),
      n.setAttribute("charset", "UTF-8"),
      (n.async = !0),
      (n.src = c),
      (n.id = "LA_COLLECT"),
      (i.d = n);
    var o = function () {
      s.LA.ids.push(i);
    };
    s.LA ? s.LA.ids && o() : ((s.LA = p), (s.LA.ids = []), o()),
      r.parentNode.insertBefore(n, r);
  })();
})({ id: "JGjrOr2rebvP6q2a", ck: "JGjrOr2rebvP6q2a" });
