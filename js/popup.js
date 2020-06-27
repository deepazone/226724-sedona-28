var searchButton = document.querySelector(".search");
var formSearch = document.querySelector(".form-search");
var dateIn = document.querySelector("[name=date-in]");
var dateOut = document.querySelector("[name=date-out]");
var adult = document.querySelector(".adult")
var kids = document.querySelector(".kids")

var isStorageSupport = true;
var storage = "";

try {
   storage = localStorage.getItem("adult");
 } catch (err) {
   isStorageSupport = false;
 }

searchButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	formSearch.classList.toggle("form-search-open");
	formSearch.classList.remove('shake-error');
});

formSearch.addEventListener("submit", function(evt) {
	if (!dateIn.value || !dateOut.value){
		evt.preventDefault();
		console.log('Введите значение');
		formSearch.offsetWidth = formSearch.offsetWidth;
		formSearch.classList.add('shake-error');
		dateIn.focus();
	} else {
		if (isStorageSupport){
			localStorage.setItem("adult", adult.value);
			localStorage.setItem("adult", kids.value);
			console.log('Форма отправлена');
			formSearch.classList.remove('shake-error');
		 }
	 }   
});