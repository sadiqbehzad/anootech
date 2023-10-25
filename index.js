function showDropdown() {
  let dropdownm = document.getElementById("dropdownmenu");
  let elemDiv = document.createElement("button");
  elemDiv.innerHTML = "&times";
  elemDiv.style.cssText =
    "width: 20px; height: 20px; background-color: white; color: black; text-align: center; z-index:10; padding: 0; margin: 0";

  elemDiv.setAttribute("onclick", "basta()");
  elemDiv.setAttribute("type", "button");
  dropdownm.prepend(elemDiv);
  console.log(document.body);
  document.getElementById("dropdownmenu").style.cssText = "display:grid";
}
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
