var text = document.querySelector('.text')
var alisher = Number(prompt("Alisher qancha puling bor"))

var somdollar = 9433.34;
var somyevro = 10354.03;
var bilet = 500;
var mexmonxona = 250;
var muzey = 120;

var biletxisob = somdollar * bilet;
var mexmonxonaxisob = somdollar * mexmonxona;
var muzeyxisob = somyevro * muzey;

var umumiy = biletxisob + mexmonxonaxisob + muzeyxisob;

if(alisher >= umumiy){
    text.textContent = "Oq yo'l, Alisher!😉"
}else {
    text.textContent = "Alisher, ozgina sabr qilish kerak bo'lar ekan.🤨"
}
console.log(text)