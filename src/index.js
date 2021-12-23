// document.getElementById("txt").addEventListener("click", () => {
//   const uptxt = document.getElementById("fadeIn_txt");
//   uptxt.style.display = "block";
// });
$(function () {
  $(".txt").click(function () {
    $(".fadeIn_txt").fadeIn("slow");
  });
});
