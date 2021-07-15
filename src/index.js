
// document.getElementById("btn").onclick = function() {
// setTimeout(function(){
// alert("2秒経過")
// },2000)
// }
let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    window.setTimeout(function(){
        alert('時間切れです');
    }, 2000);
});