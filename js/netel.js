let myMenu=document.querySelector(".menu");
let myDropdown=document.querySelector(".bar");
myDropdown.addEventListener("click", show);
function show() {
    myMenu.classList.toggle("empty");
    
}