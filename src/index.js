// document.getElementById("txt").addEventListener("click", () => {
//   const uptxt = document.getElementById("fadeIn_txt");
//   uptxt.style.display = "block";
// });

// $(function () {
//   $(".txt").click(function () {
//     $(".fadeIn_txt").fadeIn("slow");
//   });
// });

// document.getElementById("txt").addEventListener("click", () => {
//   const outtxt = document.getElementById("fadeOut_txt");
//   outtxt.style.display = "none";
// });

$(function () {
  $(".txt").click(function () {
    $(".fadeOut_txt").fadeOut("slow");
  });
});
