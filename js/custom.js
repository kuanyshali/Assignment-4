document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  /* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    document.querySelector(".loader_bg").style.display = "none";
  }, 1500);

  /* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  var tooltips = document.querySelectorAll('[data-toggle="tooltip"]');
  for (var i = 0; i < tooltips.length; i++) {
    new bootstrap.Tooltip(tooltips[i]);
  }

  /* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  var megamenus = document.querySelectorAll(".main-menu ul li.megamenu");
  for (var i = 0; i < megamenus.length; i++) {
    megamenus[i].addEventListener("mouseover", function () {
      if (!this.parentNode.classList.contains("#wrapper")) {
        document.querySelector("#wrapper").classList.add("overlay");
      }
    });
    megamenus[i].addEventListener("mouseleave", function () {
      document.querySelector("#wrapper").classList.remove("overlay");
    });
  }

  /* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  window.addEventListener("scroll", function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;
    if (scroll >= 100) {
      document.getElementById("back-to-top").classList.add("b-show_scrollBut");
    } else {
      document
        .getElementById("back-to-top")
        .classList.remove("b-show_scrollBut");
    }
  });

  document.getElementById("back-to-top").addEventListener("click", function () {
    scrollToTop(1000);
  });

  function scrollToTop(duration) {
    var start = window.pageYOffset || document.documentElement.scrollTop,
      currentTime = null;

    duration = duration || 500;

    var animateScroll = function (timestamp) {
      if (!currentTime) currentTime = timestamp;
      var progress = timestamp - currentTime;
      var val = Math.max(
        Math.easeInOutQuad(progress, start, -start, duration),
        0
      );
      window.scrollTo(0, val);
      if (progress < duration) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    // easing functions
    Math.easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    window.requestAnimationFrame(animateScroll);
  }

  /* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  var countdowns = document.querySelectorAll("[data-countdown]");
  for (var i = 0; i < countdowns.length; i++) {
    var countdown = countdowns[i];
    var finalDate = countdown.getAttribute("data-countdown");
    initializeCountdown(countdown, finalDate);
  }

  function initializeCountdown(countdown, finalDate) {
    var timeBoxes = countdown.getElementsByClassName("time-box");
    setInterval(function () {
      var currentDate = new Date().getTime();
      var remainingTime = finalDate - currentDate;

      var seconds = Math.floor((remainingTime / 1000) % 60);
      var minutes = Math.floor((remainingTime / 1000 / 60) % 60);
      var hours = Math.floor((remainingTime / (1000 * 60 * 60)) % 24);
      var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      var weeks = Math.floor(days / 7);

      timeBoxes[0].textContent = weeks;
      timeBoxes[1].textContent = days;
      timeBoxes[2].textContent = hours;
      timeBoxes[3].textContent = minutes;
      timeBoxes[4].textContent = seconds;
    }, 1000);
  }

  /* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  var sidebarCollapse = document.getElementById("sidebarCollapse");
  var sidebar = document.getElementById("sidebar");
  sidebarCollapse.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    this.classList.toggle("active");
  });

  /* Product slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  // optional
  var blogCarousel = document.getElementById("blogCarousel");
  new bootstrap.Carousel(blogCarousel, {
    interval: 5000,
  });
});

/* Toggle sidebar
-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

// sound
function play_sound(clicked_id) {
  var audio = new Audio(clicked_id + ".mp3");
  audio.play();
}
