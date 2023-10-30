function changePic(id, att, path) {
  let obj = document.getElementById(id);
  obj.setAttribute(att, path);
}
function restorePic(id, att, path) {
  let obj = document.getElementById(id);
  obj.setAttribute(att, path);
}

function showHideMenu(id) {
  if (document.getElementById(id).style.display === "grid") {
    hideMenu(id);
  } else {
    showMenu(id);
  }
}

function showMenu(id) {
  document.getElementById(id).style.cssText = "display: grid";
}

function hideMenu(id) {
  document.getElementById(id).style.cssText = "display: none";
}

window.addEventListener("resize", function () {
  "use strict";
  window.location.reload();
});

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "anootech23@gmail.com",
    Password: "58A11570B3D74B8CE0FC0CB6DA22BDF962A6",
    To: "anootech23@gmail.com",
    From: document.getElementById("email").value,
    Subject: "Random Subject (Must be edited in the form",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Phone number: " +
      document.getElementById("phone").value +
      "<br> message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent successfully"));
}
