import $ from "jquery";
import "jquery-mousewheel";
import "malihu-custom-scrollbar-plugin";

export const jqueryFuntion = () => {
  // Avoid running multiple times in dev (due to React Strict Mode)
  if (typeof window === "undefined") return;

  // Preloader and initial animations
  const initAnimations = () => {
    $("#preloader").addClass("preloaded");

    const delay1 = $(window).width() > 1024 ? 1500 : 1100;
    const delay2 = $(window).width() > 1024 ? 2200 : 1800;

    setTimeout(() => $(".header-inner").addClass("animated fadeInDown"), delay1);
    setTimeout(() => {
      $(".home>div>div h1 span span").addClass("animated fadeInUp");
      $(".home>div>div .intro").addClass("animated fadeInUp");
      $(".home .cta").addClass("animated fadeInUp");
    }, delay2);
  };

  // Reveal animation logic
  const animateContent = () => {
    const divWidth = $("#wrapper").width() - $(window).width() / 2 + 270;
    $(".animated-layer").each(function () {
      const $this = $(this);
      const offset = $this.offset().left;

      if (offset < divWidth && !$this.hasClass("animated")) {
        if ($this.hasClass("image-animation")) $this.addClass("animated");
        else if ($this.hasClass("fade-in-up-animation")) $this.addClass("animated fadeInUp");
        else if ($this.hasClass("fade-in-animation")) $this.addClass("animated fadeIn");
        else if ($this.hasClass("fade-in-down-animation")) $this.addClass("animated fadeInDown");
        else if ($this.hasClass("fade-in-right-animation")) $this.addClass("animated fadeInRight");
        else if ($this.hasClass("fade-in-left-animation")) $this.addClass("animated fadeInLeft");
      }
    });
  };

  // Active section on scroll
  const checkScroll = () => {
    const left = Math.abs(parseInt($(".mCSB_container").css("left")));
    const width = (selector) => $(selector).width() || 0;

    const w1 = width(".home") - 10;
    const w2 = w1 + width(".about") + width(".facts") - 10;
    const w3 = w2 + width(".portfolio .main-content") + width(".portfolio .details") + 250 + 65 + 300 + width(".clients") - 10;
    const w4 = w3 + width(".contact") + width(".testimonials") - 10;
    const w5 = w4 + width(".blog") + width(".copyright") - 10;

    $(".menu ul li span").removeClass("active");

    if (left > w4 && left < w5) $("#blog-link").addClass("active");
    else if (left > w3 && left < w4) $("#contact-link").addClass("active");
    else if (left > w2 && left < w3) $("#portfolio-link").addClass("active");
    else if (left > w1 && left < w2) $("#about-link").addClass("active");
    else $("#home-link").addClass("active");
  };

  // Custom scroll init
  const initScroll = () => {
    if ($(window).width() > 1024) {
      $("#wrapper").mCustomScrollbar({
        axis: "x",
        theme: "dark-3",
        keyboard: { enable: true, scrollType: "stepless" },
        advanced: { autoExpandHorizontalScroll: true },
        mouseWheel: { scrollAmount: 400 },
        callbacks: {
          whileScrolling: () => {
            animateContent();
            checkScroll();
          },
        },
      });
    } else {
      const WOW = require("wowjs").WOW;
      new WOW().init();
    }
  };

  // Event listeners
  const bindEvents = () => {
    $("a[href='#']").on("click", (e) => e.preventDefault());

    $("#menu li a").on("click", () => {
      setTimeout(() => {
        history.replaceState("", document.title, window.location.pathname + window.location.search);
      }, 5);
    });

    if ($(window).width() > 1024) {
      $(".fadeIn, .fadeInUp, .fadeInDown, .fadeInRight, .fadeInLeft").removeClass(
        "fadeIn fadeInUp fadeInDown fadeInRight fadeInLeft"
      );
    }

    $(".menu ul li span").on("click", function () {
      setTimeout(() => $(this).toggleClass("active"), 1600);
    });

    $("#home-link").on("click", () => $("#wrapper").mCustomScrollbar("scrollTo", "#home", { scrollInertia: 1500 }));
    $("#about-link").on("click", () => $("#wrapper").mCustomScrollbar("scrollTo", "#about", { scrollInertia: 1500 }));
    $("#portfolio-link").on("click", () => $("#wrapper").mCustomScrollbar("scrollTo", "#portfolio", { scrollInertia: 1500 }));
    $("#contact-link").on("click", () => $("#wrapper").mCustomScrollbar("scrollTo", "#contact", { scrollInertia: 1500 }));
    $("#blog-link").on("click", () => $("#wrapper").mCustomScrollbar("scrollTo", "#blog", { scrollInertia: 1500 }));

    $("#menu li a").on("click", () => {
      $("#checkboxmenu").trigger("click");
      $("body").toggleClass("overflow-hidden");
    });

    $("#menuToggle").on("click", () => {
      $("body").toggleClass("overflow-hidden");
    });

    $("#cta").on("click", () => {
      if ($(window).width() > 1024) {
        $("#wrapper").mCustomScrollbar("scrollTo", "#about", { scrollInertia: 1500 });
      } else {
        $("html, body").animate({ scrollTop: $("#my-photo").offset().top });
      }
    });
  };

  // Safari fix
  const handleSafari = () => {
    if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      $("body").addClass("body-safari");
    }
  };

  // Run everything
  $(document).ready(() => {
    initAnimations();
    initScroll();
    bindEvents();
    handleSafari();
  });
};
