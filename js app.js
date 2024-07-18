var menuBtn = document.querySelector(".navbar-toggler");//icon
var menuCls = document.querySelector(".navbar-toggler.cls"); //close icon
var menu = document.querySelector(".menu-items"); //menu
//eventlistener
menuBtn.addEventListener("click",function(){
    menu.classList.toggle("active");
})
menuCls.addEventListener("click",function(){
    menu.classList.toggle("active");
})