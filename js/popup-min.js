var searchButton=document.querySelector(".search"),formSearch=document.querySelector(".form-search"),dateIn=document.querySelector("[name=date-in]"),dateOut=document.querySelector("[name=date-out]"),adults=document.querySelector("[name=adults]"),kids=document.querySelector("[name=kids]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("adults")}catch(e){isStorageSupport=!1}searchButton.addEventListener("click",function(e){e.preventDefault(),formSearch.classList.toggle("form-search-open"),formSearch.classList.remove("shake-error")}),formSearch.addEventListener("submit",function(e){dateIn.value&&dateOut.value?isStorageSupport&&(localStorage.setItem("adults",adults.value),localStorage.setItem("kids",kids.value)):(e.preventDefault(),formSearch.classList.remove("shake-error"),formSearch.offsetWidth,formSearch.classList.add("shake-error"))});