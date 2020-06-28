var searchButton = document.querySelector(".search");
var formSearch = document.querySelector(".form-search");
var dateIn = document.querySelector("[name=date-in]");
var dateOut = document.querySelector("[name=date-out]");
var adults = document.querySelector("[name=adults]");
var kids = document.querySelector("[name=kids]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("adults");
 } catch (err) {
   isStorageSupport = false;
 }

searchButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	formSearch.classList.toggle("form-search-open");
	formSearch.classList.remove("shake-error");
});

formSearch.addEventListener("submit", function(evt) {
	if (!dateIn.value || !dateOut.value){
		evt.preventDefault();
		formSearch.classList.remove("shake-error");
		formSearch.offsetWidth = formSearch.offsetWidth;
		formSearch.classList.add("shake-error");
	} else {
		if (isStorageSupport){
			localStorage.setItem("adults", adults.value);
			localStorage.setItem("kids", kids.value);
		 }
	 }   
});