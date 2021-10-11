// $(() => {
//   $(".text").prepend("<p>日曜日</p>");
// });

// const pTop = document.getElementById('id-text')
// const newP = document.createElement('p')
// newP.textContent = '日曜日'
// pTop.before(newP)

// $(() => {
//   $(".text").append("<p>日曜日</p>");
// });

const pTop = document.getElementById("id-text");
const newP = document.createElement("p");
newP.textContent = "日曜日";
pTop.after(newP);
