var searchButton = document.querySelector(".search");
var formSearch = document.querySelector(".form-search");
var dateIn = document.querySelector("[name=date-in]");
var dateOut = document.querySelector("[name=date-out]");

var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("date-in");
 } catch (err) {
	isStorageSupport = false;
 }

searchButton.addEventListener("click", function(evt) {
	evt.preventDefault();
	formSearch.classList.toggle("form-search-open");

	if (storage) {
		dateIn.value = storage;
		dateOut.focus();
	 } else {
		dateIn.focus();
	 }
});

if (storage) {
	dateIn.value = storage;
 }

formSearch.addEventListener("submit", function(evt) {
	if (!dateIn.value) {
		evt.preventDefault();
		console.log('Введите значение');
		formSearch.classList.add('shake-error');
		formSearch.offsetWidth = formSearch.offsetWidth;
		dateIn.focus();
	} else {
		if (isStorageSupport) {
		  localStorage.setItem("date-in", dateIn.value);
		  console.log('Форма отправлена');
		}
	}	
	if (!dateOut.value) {
		evt.preventDefault();
		console.log('Введите значение');
		formSearch.classList.add('shake-error');
		formSearch.offsetWidth = formSearch.offsetWidth;
		dateOut.focus();
	} else {
		if (isStorageSupport) {
		  localStorage.setItem("date-out", dateOut.value);
		  console.log('Форма отправлена');
		}
	}	
});