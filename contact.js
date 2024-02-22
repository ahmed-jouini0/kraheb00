let x = 0;
document
  .getElementById("hamburger")
  .addEventListener("click", function show_nav() {
    if (x == 0) {
      document.getElementById("options").style.display = "flex";
      setTimeout(
        () => (document.getElementById("options").style.opacity = "1"),
        100
      );
      x = 1;
    } else {
      document.getElementById("options").style.opacity = "0";
      setTimeout(
        () => (document.getElementById("options").style.display = "none"),
        500
      );

      x = 0;
    }
  });
document.getElementById("home").addEventListener("click", function home() {
  window.location.href = "http://127.0.0.1:5500/index.html";
});
document.getElementById("cars").addEventListener("click", function cars() {
  window.location.href = "http://127.0.0.1:5500/cars.html";
});
document.getElementById("about us").addEventListener("click", function about() {
  window.location.href = "http://127.0.0.1:5500/index.html";
});
document
  .getElementById("contact")
  .addEventListener("click", function contact() {
    window.location.href = "http://127.0.0.1:5500/contact.html";
  });
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("sport").style.borderColor = "black";
  document.getElementById("sport").style.width = "200px";
  document.getElementById("jdm_grid").style.display = "none";
  document.getElementById("suv_grid").style.display = "none";
});
document.getElementById("sport").addEventListener("click", function () {
  document.getElementById("sport").style.borderColor = "black";
  document.getElementById("sport").style.width = "200px";
  document.getElementById("jdm").style.borderColor = "rgb(216, 216, 216)";
  document.getElementById("jdm").style.width = "150px";
  document.getElementById("suv").style.borderColor = "rgb(216, 216, 216)";
  document.getElementById("suv").style.width = "150px";
});
document.getElementById("jdm").addEventListener("click", function () {
  document.getElementById("jdm").style.borderColor = "black";
  document.getElementById("jdm").style.width = "200px";
  document.getElementById("sport").style.borderColor = "rgb(216, 216, 216)";
  document.getElementById("sport").style.width = "150px";
  document.getElementById("suv").style.borderColor = "rgb(216, 216, 216)";
  document.getElementById("suv").style.width = "150px";
});
document.getElementById("suv").addEventListener("click", function () {
  document.getElementById("suv").style.borderColor = "black";
  document.getElementById("suv").style.width = "200px";
  document.getElementById("jdm").style.borderColor = "rgb(216, 216, 216)";
  document.getElementById("jdm").style.width = "150px";
  document.getElementById("sport").style.borderColor = "rgb(216, 216, 216)";
  document.getElementById("sport").style.width = "150px";
});

document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("img1").style.display = "flex";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "none";
});
document.getElementById("btn2").addEventListener("click", function () {
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "flex";
  document.getElementById("img3").style.display = "none";
});
document.getElementById("btn3").addEventListener("click", function () {
  document.getElementById("img1").style.display = "none";
  document.getElementById("img2").style.display = "none";
  document.getElementById("img3").style.display = "flex";
});

document.getElementById("btn1_1").addEventListener("click", function () {
  document.getElementById("img1_1").style.display = "flex";
  document.getElementById("img2_1").style.display = "none";
  document.getElementById("img3_1").style.display = "none";
});
document.getElementById("btn2_1").addEventListener("click", function () {
  document.getElementById("img1_1").style.display = "none";
  document.getElementById("img2_1").style.display = "flex";
  document.getElementById("img3_1").style.display = "none";
});
document.getElementById("btn3_1").addEventListener("click", function () {
  document.getElementById("img1_1").style.display = "none";
  document.getElementById("img2_1").style.display = "none";
  document.getElementById("img3_1").style.display = "flex";
});

document.getElementById("btn1_2").addEventListener("click", function () {
  document.getElementById("img1_2").style.display = "flex";
  document.getElementById("img2_2").style.display = "none";
  document.getElementById("img3_2").style.display = "none";
});
document.getElementById("btn2_2").addEventListener("click", function () {
  document.getElementById("img1_2").style.display = "none";
  document.getElementById("img2_2").style.display = "flex";
  document.getElementById("img3_2").style.display = "none";
});
document.getElementById("btn3_2").addEventListener("click", function () {
  document.getElementById("img1_2").style.display = "none";
  document.getElementById("img2_2").style.display = "none";
  document.getElementById("img3_2").style.display = "flex";
});

document.getElementById("btn1_3").addEventListener("click", function () {
  document.getElementById("img1_3").style.display = "flex";
  document.getElementById("img2_3").style.display = "none";
  document.getElementById("img3_3").style.display = "none";
});
document.getElementById("btn2_3").addEventListener("click", function () {
  document.getElementById("img1_3").style.display = "none";
  document.getElementById("img2_3").style.display = "flex";
  document.getElementById("img3_3").style.display = "none";
});
document.getElementById("btn3_3").addEventListener("click", function () {
  document.getElementById("img1_3").style.display = "none";
  document.getElementById("img2_3").style.display = "none";
  document.getElementById("img3_3").style.display = "flex";
});

document.getElementById("btn1_4").addEventListener("click", function () {
  document.getElementById("img1_4").style.display = "flex";
  document.getElementById("img2_4").style.display = "none";
  document.getElementById("img3_4").style.display = "none";
});
document.getElementById("btn2_4").addEventListener("click", function () {
  document.getElementById("img1_4").style.display = "none";
  document.getElementById("img2_4").style.display = "flex";
  document.getElementById("img3_4").style.display = "none";
});
document.getElementById("btn3_4").addEventListener("click", function () {
  document.getElementById("img1_4").style.display = "none";
  document.getElementById("img2_4").style.display = "none";
  document.getElementById("img3_4").style.display = "flex";
});

document.getElementById("btn1_5").addEventListener("click", function () {
  document.getElementById("img1_5").style.display = "flex";
  document.getElementById("img2_5").style.display = "none";
  document.getElementById("img3_5").style.display = "none";
});
document.getElementById("btn2_5").addEventListener("click", function () {
  document.getElementById("img1_5").style.display = "none";
  document.getElementById("img2_5").style.display = "flex";
  document.getElementById("img3_5").style.display = "none";
});
document.getElementById("btn3_5").addEventListener("click", function () {
  document.getElementById("img1_5").style.display = "none";
  document.getElementById("img2_5").style.display = "none";
  document.getElementById("img3_5").style.display = "flex";
});

document.getElementById("btn1_6").addEventListener("click", function () {
  document.getElementById("img1_6").style.display = "flex";
  document.getElementById("img2_6").style.display = "none";
  document.getElementById("img3_6").style.display = "none";
});
document.getElementById("btn2_6").addEventListener("click", function () {
  document.getElementById("img1_6").style.display = "none";
  document.getElementById("img2_6").style.display = "flex";
  document.getElementById("img3_6").style.display = "none";
});
document.getElementById("btn3_6").addEventListener("click", function () {
  document.getElementById("img1_6").style.display = "none";
  document.getElementById("img2_6").style.display = "none";
  document.getElementById("img3_6").style.display = "flex";
});

document.getElementById("btn1_7").addEventListener("click", function () {
  document.getElementById("img1_7").style.display = "flex";
  document.getElementById("img2_7").style.display = "none";
  document.getElementById("img3_7").style.display = "none";
});
document.getElementById("btn2_7").addEventListener("click", function () {
  document.getElementById("img1_7").style.display = "none";
  document.getElementById("img2_7").style.display = "flex";
  document.getElementById("img3_7").style.display = "none";
});
document.getElementById("btn3_7").addEventListener("click", function () {
  document.getElementById("img1_7").style.display = "none";
  document.getElementById("img2_7").style.display = "none";
  document.getElementById("img3_7").style.display = "flex";
});
document.getElementById("sport").addEventListener("click", function () {
  document.getElementById("sports_grid").style.display = "grid";
  document.getElementById("jdm_grid").style.display = "none";
  document.getElementById("suv_grid").style.display = "none";
});
document.getElementById("jdm").addEventListener("click", function () {
  document.getElementById("jdm_grid").style.display = "grid";
  document.getElementById("sports_grid").style.display = "none";
  document.getElementById("suv_grid").style.display = "none";
});
document.getElementById("suv").addEventListener("click", function () {
  document.getElementById("suv_grid").style.display = "grid";
  document.getElementById("jdm_grid").style.display = "none";
  document.getElementById("sports_grid").style.display = "none";
});

document.getElementById("btn1_jdm").addEventListener("click", function () {
  document.getElementById("img1_jdm").style.display = "flex";
  document.getElementById("img2_jdm").style.display = "none";
  document.getElementById("img3_jdm").style.display = "none";
});
document.getElementById("btn2_jdm").addEventListener("click", function () {
  document.getElementById("img1_jdm").style.display = "none";
  document.getElementById("img2_jdm").style.display = "flex";
  document.getElementById("img3_jdm").style.display = "none";
});
document.getElementById("btn3_jdm").addEventListener("click", function () {
  document.getElementById("img1_jdm").style.display = "none";
  document.getElementById("img2_jdm").style.display = "none";
  document.getElementById("img3_jdm").style.display = "flex";
});

document.getElementById("btn1_1_jdm").addEventListener("click", function () {
  document.getElementById("img1_1_jdm").style.display = "flex";
  document.getElementById("img2_1_jdm").style.display = "none";
  document.getElementById("img3_1_jdm").style.display = "none";
});
document.getElementById("btn2_1_jdm").addEventListener("click", function () {
  document.getElementById("img1_1_jdm").style.display = "none";
  document.getElementById("img2_1_jdm").style.display = "flex";
  document.getElementById("img3_1_jdm").style.display = "none";
});
document.getElementById("btn3_1_jdm").addEventListener("click", function () {
  document.getElementById("img1_1_jdm").style.display = "none";
  document.getElementById("img2_1_jdm").style.display = "none";
  document.getElementById("img3_1_jdm").style.display = "flex";
});

document.getElementById("btn1_2_jdm").addEventListener("click", function () {
  document.getElementById("img1_2_jdm").style.display = "flex";
  document.getElementById("img2_2_jdm").style.display = "none";
  document.getElementById("img3_2_jdm").style.display = "none";
});
document.getElementById("btn2_2_jdm").addEventListener("click", function () {
  document.getElementById("img1_2_jdm").style.display = "none";
  document.getElementById("img2_2_jdm").style.display = "flex";
  document.getElementById("img3_2_jdm").style.display = "none";
});
document.getElementById("btn3_2_jdm").addEventListener("click", function () {
  document.getElementById("img1_2_jdm").style.display = "none";
  document.getElementById("img2_2_jdm").style.display = "none";
  document.getElementById("img3_2_jdm").style.display = "flex";
});

document.getElementById("btn1_3_jdm").addEventListener("click", function () {
  document.getElementById("img1_3_jdm").style.display = "flex";
  document.getElementById("img2_3_jdm").style.display = "none";
  document.getElementById("img3_3_jdm").style.display = "none";
});
document.getElementById("btn2_3_jdm").addEventListener("click", function () {
  document.getElementById("img1_3_jdm").style.display = "none";
  document.getElementById("img2_3_jdm").style.display = "flex";
  document.getElementById("img3_3_jdm").style.display = "none";
});
document.getElementById("btn3_3_jdm").addEventListener("click", function () {
  document.getElementById("img1_3_jdm").style.display = "none";
  document.getElementById("img2_3_jdm").style.display = "none";
  document.getElementById("img3_3_jdm").style.display = "flex";
});

document.getElementById("btn1_4_jdm").addEventListener("click", function () {
  document.getElementById("img1_4_jdm").style.display = "flex";
  document.getElementById("img2_4_jdm").style.display = "none";
  document.getElementById("img3_4_jdm").style.display = "none";
});
document.getElementById("btn2_4_jdm").addEventListener("click", function () {
  document.getElementById("img1_4_jdm").style.display = "none";
  document.getElementById("img2_4_jdm").style.display = "flex";
  document.getElementById("img3_4_jdm").style.display = "none";
});
document.getElementById("btn3_4_jdm").addEventListener("click", function () {
  document.getElementById("img1_4_jdm").style.display = "none";
  document.getElementById("img2_4_jdm").style.display = "none";
  document.getElementById("img3_4_jdm").style.display = "flex";
});
document.getElementById("btn1_suv").addEventListener("click", function () {
  document.getElementById("img1_suv").style.display = "flex";
  document.getElementById("img2_suv").style.display = "none";
  document.getElementById("img3_suv").style.display = "none";
});
document.getElementById("btn2_suv").addEventListener("click", function () {
  document.getElementById("img1_suv").style.display = "none";
  document.getElementById("img2_suv").style.display = "flex";
  document.getElementById("img3_suv").style.display = "none";
});
document.getElementById("btn3_suv").addEventListener("click", function () {
  document.getElementById("img1_suv").style.display = "none";
  document.getElementById("img2_suv").style.display = "none";
  document.getElementById("img3_suv").style.display = "flex";
});

document.getElementById("btn1_1_suv").addEventListener("click", function () {
  document.getElementById("img1_1_suv").style.display = "flex";
  document.getElementById("img2_1_suv").style.display = "none";
  document.getElementById("img3_1_suv").style.display = "none";
});
document.getElementById("btn2_1_suv").addEventListener("click", function () {
  document.getElementById("img1_1_suv").style.display = "none";
  document.getElementById("img2_1_suv").style.display = "flex";
  document.getElementById("img3_1_suv").style.display = "none";
});
document.getElementById("btn3_1_suv").addEventListener("click", function () {
  document.getElementById("img1_1_suv").style.display = "none";
  document.getElementById("img2_1_suv").style.display = "none";
  document.getElementById("img3_1_suv").style.display = "flex";
});

document.getElementById("btn1_2_suv").addEventListener("click", function () {
  document.getElementById("img1_2_suv").style.display = "flex";
  document.getElementById("img2_2_suv").style.display = "none";
  document.getElementById("img3_2_suv").style.display = "none";
});
document.getElementById("btn2_2_suv").addEventListener("click", function () {
  document.getElementById("img1_2_suv").style.display = "none";
  document.getElementById("img2_2_suv").style.display = "flex";
  document.getElementById("img3_2_suv").style.display = "none";
});
document.getElementById("btn3_2_suv").addEventListener("click", function () {
  document.getElementById("img1_2_suv").style.display = "none";
  document.getElementById("img2_2_suv").style.display = "none";
  document.getElementById("img3_2_suv").style.display = "flex";
});

document.getElementById("btn1_3_suv").addEventListener("click", function () {
  document.getElementById("img1_3_suv").style.display = "flex";
  document.getElementById("img2_3_suv").style.display = "none";
  document.getElementById("img3_3_suv").style.display = "none";
});
document.getElementById("btn2_3_suv").addEventListener("click", function () {
  document.getElementById("img1_3_suv").style.display = "none";
  document.getElementById("img2_3_suv").style.display = "flex";
  document.getElementById("img3_3_suv").style.display = "none";
});
document.getElementById("btn3_3_suv").addEventListener("click", function () {
  document.getElementById("img1_3_suv").style.display = "none";
  document.getElementById("img2_3_suv").style.display = "none";
  document.getElementById("img3_3_suv").style.display = "flex";
});

document.getElementById("btn1_4_suv").addEventListener("click", function () {
  document.getElementById("img1_4_suv").style.display = "flex";
  document.getElementById("img2_4_suv").style.display = "none";
  document.getElementById("img3_4_suv").style.display = "none";
});
document.getElementById("btn2_4_suv").addEventListener("click", function () {
  document.getElementById("img1_4_suv").style.display = "none";
  document.getElementById("img2_4_suv").style.display = "flex";
  document.getElementById("img3_4_suv").style.display = "none";
});
document.getElementById("btn3_4_suv").addEventListener("click", function () {
  document.getElementById("img1_4_suv").style.display = "none";
  document.getElementById("img2_4_suv").style.display = "none";
  document.getElementById("img3_4_suv").style.display = "flex";
});
