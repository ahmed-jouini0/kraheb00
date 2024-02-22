window.onscroll = function () {
  navbar_background();
};

let header = document.getElementById("navbar");
let sticky = header.offsetTop;
let target = document.getElementById("target");

let about = document.getElementById("about");

function navbar_background() {
  if (
    window.scrollY >= target.offsetTop - 80 &&
    window.scrollY <= about.offsetTop - 20
  ) {
    document.getElementById("navbar").style.background =
      "linear-gradient(black 90px,transparent 0%)";
    document.getElementById("navbar").style.paddingTop = 0;
    document.getElementById("navbar").style.transition = "0.2s";
  } else {
    document.getElementById("navbar").style.background =
      "linear-gradient(black 0px,transparent 0%)";
    if (window.scrollY < target.offsetTop - 80) {
      document.getElementById("navbar").style.paddingTop = "0px";
    } else {
      document.getElementById("logo_img").style.backgroundColor = "#7f0000";
    }
    document.getElementById("navbar").style.transition = "0.2s";
  }
  if (window.scrollY >= 300) {
    document.getElementById("video_text").style.opacity = "0";
    document.getElementById("video_text").style.transition = "0.5s";
  } else {
    document.getElementById("video_text").style.opacity = "1";
    document.getElementById("video_text").style.transition = "0.5s";
  }
  if (scrollY > about.offsetTop - 20) {
    document.getElementById("logo_img").style.backgroundColor = "transparent";
  } else {
    document.getElementById("logo_img").style.backgroundColor = "black";
  }
}

function cars_scroll() {
  window.scrollTo({
    top: document.getElementById("cars_section").offsetTop,
    behavior: "smooth",
  });
}

function about_scroll() {
  window.scrollTo({
    top: document.getElementById("about").offsetTop,
    behavior: "smooth",
  });

  document.getElementById("choose").style.fontSize = "43px";
  document.getElementById("choose").style.transition = "3s";
}

function home() {
  if (window.location.pathname == "/index.html") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    window.location.href = "http://127.0.0.1:5500/index.html";
  }
}
let login = 0;
document
  .getElementById("login_icon")
  .addEventListener("click", function login_state() {
    if (login == 0) {
      document.getElementById("login_state").style.display = "flex";
      setTimeout(
        () => (document.getElementById("login_state").style.opacity = "1"),
        100
      );

      login = 1;
    } else {
      document.getElementById("login_state").style.opacity = "0";
      setTimeout(
        () => (document.getElementById("login_state").style.display = "none"),
        100
      );

      login = 0;
    }
  });
document
  .getElementById("go_to_login_page")
  .addEventListener("click", function go_to_login_page() {
    window.location.href = "http://127.0.0.1:5500/login.html";
  });
let rollmenu = 0;
function roll_menu() {
  if (rollmenu == 0) {
    document.getElementById("menu").style.display = "flex";
    document.getElementById("hamburger").style.marginRight = "175px";

    setTimeout(
      () => (document.getElementById("menu").style.width = "200px"),
      200
    );
    setTimeout(
      () => (document.getElementById("links").style.fontSize = "18px"),
      400
    );
    rollmenu = 1;
  } else {
    setTimeout(
      () => (document.getElementById("links").style.fontSize = "0px"),
      0
    );
    setTimeout(
      () => (document.getElementById("menu").style.width = "0px"),
      200
    );

    setTimeout(
      () => (document.getElementById("hamburger").style.marginRight = "0px"),
      400
    );
    setTimeout(
      () => (document.getElementById("menu").style.display = "none"),
      400
    );

    rollmenu = 0;
  }
}
document
  .getElementById("contact")
  .addEventListener("click", function contact() {
    window.location.href = "http://127.0.0.1:5500/contact.html";
  });

setInterval(() => {
  if (window.innerWidth < 530 && rollmenu == 1) {
    document.getElementById("logo_fade").style.opacity = "0";
  } else {
    document.getElementById("logo_fade").style.opacity = "1";
  }
  if (window.innerWidth < 600 && window.scrollY >= about.offsetTop - 20) {
    document.getElementById("brand").style.opacity = "0";
  } else {
    document.getElementById("brand").style.opacity = "1";
  }
}, 200);
document.getElementById("card1").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/cars.html";
});
document.getElementById("card2").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/cars.html";
});
document.getElementById("card3").addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5500/cars.html";
});
