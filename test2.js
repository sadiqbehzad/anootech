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
