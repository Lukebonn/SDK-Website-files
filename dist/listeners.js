// function menuDropFunction() {
//   document.getElementById("drop-menu").classList.toggle("show");
// }

function menuDropFunction() {
  document.querySelectorAll(".drop-menu").forEach(el => {
    el.classList.toggle("show");
  });
  document.querySelectorAll(".menu-dropbtn").forEach(el => {
    el.classList.toggle("show");
  });
  document.querySelectorAll(".container__nav--label").forEach(el => {
    el.classList.toggle("show");
  });
  document.querySelectorAll(".nav-left").forEach(el => {
    el.classList.toggle("show");
  });
  document.querySelectorAll(".nav-right").forEach(el => {
    el.classList.toggle("show");
  });
  document.querySelectorAll(".studio-logo").forEach(el => {
    el.classList.toggle("show");
  });
}
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("container__nav--label");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }