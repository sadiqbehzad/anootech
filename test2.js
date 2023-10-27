function changePic(id, att, path) {
  let obj = document.getElementById(id);
  obj.setAttribute(att, path);
}
function restorePic(id, att, path) {
  let obj = document.getElementById(id);
  obj.setAttribute(att, path);
}

// function showDropdown(id) {
//   document.getElementById(id).style.cssText = "display: grid";
// }
// function hideDropdown(id) {
//   document.getElementById(id).style.cssText = "display: none";
// }
function basta() {
  console.log("Hi, this is CLOSE function");
  document.getElementById("dropdownmenu").style.cssText = "display:none";
  let dropdownm = document.getElementById("dropdownmenu");
  dropdownm.removeChild(dropdownm.firstElementChild);
}

window.addEventListener("resize", function () {
  "use strict";
  window.location.reload();
});
