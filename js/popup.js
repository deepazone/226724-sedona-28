var popUpOpen = document.querySelector(".search");
var formSearch = document.querySelector(".form-search");
var formSearchOpen = document.querySelector(".form-search-open");
var SearchSubmit = document.querySelector(".search-submit");
var dateIn = document.querySelector("[name=date-in]")
var dateOut = document.querySelector("[name=date-out]")

popUpOpen.addEventListener("click", function(evt) {
	evt.preventDefault();
	formSearch.classList.toggle("form-search-open");
});

formSearch.addEventListener("submit", function(evt) {
	if (!dateIn.value || !dateOut.value) {
		evt.preventDefault();
		console.log('Введите значение');
	}
});