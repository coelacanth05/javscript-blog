// $("p").on('click',function(){
//   $(this).toggleClass("is-active")
// })

// document.getElementById('p').style.color = "bule"

document.getElementById("p").onclick = () => {
  document.getElementById("p").classList.toggle("is-active");
};
