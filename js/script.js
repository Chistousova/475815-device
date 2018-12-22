
var link = document.querySelector(".popup-form");
var popup = document.querySelector(".form-write-us");
var close = popup.querySelector(".form-write-us-close")
var maplink = document.querySelector(".link-open-map");
var open = document.querySelector(".map-popup");
var closemap = open.querySelector(".map-popup-close");


link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("open-form");

});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("open-form");
});


maplink.addEventListener("click", function (evt) {
evt.preventDefault();
open.classList.add("open-map");

});

closemap.addEventListener("click", function (evt) {
evt.preventDefault();
open.classList.remove("open-map");
});