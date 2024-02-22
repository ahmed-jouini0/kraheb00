function delete_content() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("date").value = "";
}
function sign_up1() {
  document.getElementById("username_message").innerHTML = "";
  document.getElementById("password_message").innerHTML = "";
  delete_content();
  document.getElementById("date").style.height = "80px";
  document.getElementById("date").style.border = "2px gray solid";
  document.getElementById("signup_sentence").style.height = "0px";
  document.getElementById("signup_sentence").style.opacity = "0";
  document.getElementById("login_button").style.transition = "0.2s ease";
  document.getElementById("login_button").style.opacity = "0";
  setTimeout(
    () => (document.getElementById("login_button").innerHTML = "SIGN UP"),
    100
  );
  setTimeout(
    () => (document.getElementById("login_button").style.opacity = "1"),
    100
  );
  document.getElementById("sign_in_text").style.transition = "0.5s ease";
  document.getElementById("sign_in_text").style.opacity = "0";
  setTimeout(
    () => (document.getElementById("sign_in_text").innerHTML = "SIGN UP"),
    300
  );
  setTimeout(
    () => (document.getElementById("sign_in_text").style.opacity = "1"),
    300
  );
}

function sign_up2() {
  delete_content();
  document.getElementById("date").style.height = "0px";
  document.getElementById("date").style.border = "none";
  document.getElementById("signup_sentence").style.height = "80px";
  document.getElementById("signup_sentence").style.opacity = "1";
  document.getElementById("login_button").style.transition = "0.2s ease";
  document.getElementById("login_button").style.opacity = "0";
  setTimeout(
    () => (document.getElementById("login_button").innerHTML = "LOG IN"),
    100
  );
  setTimeout(
    () => (document.getElementById("login_button").style.opacity = "1"),
    100
  );
  document.getElementById("sign_in_text").style.transition = "0.5s ease";
  document.getElementById("sign_in_text").style.opacity = "0";
  setTimeout(
    () => (document.getElementById("sign_in_text").innerHTML = "SIGN IN"),
    300
  );
  setTimeout(
    () => (document.getElementById("sign_in_text").style.opacity = "1"),
    300
  );
}
let user_name = "";
let pass_word = "";
function login() {
  if (document.getElementById("date").style.height == "80px") {
    if (
      document.getElementById("username").value.length >= 3 &&
      document.getElementById("password").value.length >= 8 &&
      2023 -
        parseInt(document.getElementById("date").value.substring(0, 4), 10) >=
        18
    ) {
      user_name = document.getElementById("username").value;
      pass_word = document.getElementById("password").value;
      sign_up2();
      document.getElementById("username_message").innerHTML = "";
      document.getElementById("password_message").innerHTML = "";
      document.getElementById("age_message").innerHTML = "";
    } else {
      if (document.getElementById("username").value.length < 3) {
        document.getElementById("username_message").innerHTML =
          "*Minimum Length Of 3";
      } else {
        document.getElementById("username_message").innerHTML = "";
      }
      if (document.getElementById("password").value.length < 8) {
        document.getElementById("password_message").innerHTML =
          "*Minimum Length Of 8";
      } else {
        document.getElementById("password_message").innerHTML = "";
      }
      if (
        2023 -
          parseInt(document.getElementById("date").value.substring(0, 4), 10) <
        18
      ) {
        document.getElementById("age_message").innerHTML = "*Minimum Age Of 18";
      } else {
        document.getElementById("age_message").innerHTML = "";
      }
      delete_content();
    }
  } else {
    if (
      document.getElementById("username").value.length >= 3 &&
      document.getElementById("password").value.length >= 8
    ) {
      if (
        document.getElementById("username").value == user_name &&
        document.getElementById("password").value == pass_word
      ) {
        window.location.href = "http://127.0.0.1:5500/index.html";
      } else {
        document.getElementById("username_message").innerHTML = "";
        document.getElementById("password_message").innerHTML =
          "The Username Or Password Is Incorrect";
        delete_content();
      }
    } else {
      if (document.getElementById("username").value.length < 3) {
        document.getElementById("username_message").innerHTML =
          "*Minimum Length Of 3";
      } else {
        document.getElementById("username_message").innerHTML = "";
      }
      if (document.getElementById("password").value.length < 8) {
        document.getElementById("password_message").innerHTML =
          "*Minimum Length Of 8";
      } else {
        document.getElementById("password_message").innerHTML = "";
      }

      delete_content();
    }
  }
}
