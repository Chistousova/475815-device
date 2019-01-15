
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


var slide = document.querySelector(".slideshow-button");
var button = slide.querySelectorAll("[name=slideshow]")


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

