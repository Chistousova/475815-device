
var link = document.querySelector(".popup-form");
var popup = document.querySelector(".form-write-us");
var close = popup.querySelector(".form-write-us-close")
var maplink = document.querySelector(".link-open-map");
var open = document.querySelector(".map-popup");
var closemap = open.querySelector(".map-popup-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=username]"); 
var mail = popup.querySelector("[name=e-mail]");
var letter = popup.querySelector("[name=user-letter]");




link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("open-form");
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("open-form");
});

form.addEventListener("submit", function (evt) {
if (!name.value || !mail.value || !letter.value ) {
evt.preventDefault();
popup.classList.remove("modal-error");
popup.offsetWidth = popup.offsetWidth;
popup.classList.add("modal-error");
console.log("Для отправки формы заполните все поля.");
}
});

maplink.addEventListener("click", function (evt) {
evt.preventDefault();
open.classList.add("open-map");
});

closemap.addEventListener("click", function (evt) {
evt.preventDefault();
open.classList.remove("open-map");
});


var slide1 = document.getElementById("slide-1");
var slide2 = document.getElementById("slide-2");
var slide3 = document.getElementById("slide-3");

var slider1 = document.getElementById("slider-1");
var slider2 = document.getElementById("slider-2");
var slider3 = document.getElementById("slider-3");


slide1.addEventListener("click", function (evt) {
evt.preventDefault();

slider1.style.display = "flex";
slider2.style.display = "none"; 
slider3.style.display = "none"; 
});

slide2.addEventListener("click", function (evt) {
evt.preventDefault();

slider1.style.display = "none"; 
slider2.style.display = "flex"; 
slider3.style.display = "none"; 
});

slide3.addEventListener("click", function (evt) {
evt.preventDefault();

slider1.style.display = "none"; 
slider3.style.display = "flex"; 
slider2.style.display = "none"; 
});






/*
function check()
{
 var check = document.getElementsByTagName('input');
 for(var i=0;i<check.length;i++)
 {
  if(check[i].type=='checkbox')
  {
   check[i].checked=true;
  }
 }
}

function uncheck()
{
 var uncheck=document.getElementsByTagName('input');
 for(var i=0;i<uncheck.length;i++)
 {
  if(uncheck[i].type=='checkbox')
  {
   uncheck[i].checked=false;
  }
 }
}
*/