"use strict";
const scrollTop = document.getElementById("scroll__top");
scrollTop && (scrollTop.addEventListener("click", (function () {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})), window.addEventListener("scroll", (function () {
    window.scrollY > 300 ? scrollTop.classList.add("active") : scrollTop.classList.remove("active")
})));


// button_menue
$(document).ready(function(){
    $(".btn_menu").click(function(e){
        e.preventDefault()
            $(".header__menu--navigation").addClass("show_menu");
    
    });
  });

  //X_menu_Action

$(document).ready(function(){
    $(".btn_close").click(function(e){
        e.preventDefault()
            $(".header__menu--navigation").removeClass("show_menu");
    
    });
  });

  // when click on background div of menue remove the show_menu
  $(document).ready(function(){
    $(".menu-backdrop").click(function(e){
        e.preventDefault()
            $(".header__menu--navigation").removeClass("show_menu");
    
    });
  });