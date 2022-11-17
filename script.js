let listInput = document.getElementById('form-input');
let deleteList = document.getElementById("delete-list");
let list = document.querySelector(".list");

window.addEventListener("DOMContentLoaded", function() {
    document.getElementById('my-form').addEventListener("submit", function(e) {
        e.preventDefault();
        let li = document.createElement("li");
        li.textContent = listInput.value;
        list.appendChild(li);
        listInput.value = '';
    })
  });

deleteList.addEventListener("click", function(){
    list.innerHTML = " ";
});
var burgerMenu = document.getElementById('burger-menu');
var overlay = document.getElementById('menu');
burgerMenu.addEventListener('click',function(){
    this.classList.toggle("close");
    overlay.classList.toggle("overlay");
});