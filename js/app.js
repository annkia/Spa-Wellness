document.addEventListener("DOMContentLoaded", function(){
    //obsługa nested menu
    const nestedMenu=document.querySelector(".nested-menu");
    const menuTriggerEl=document.querySelector(".menu-trigger-el");
    console.log(menuTriggerEl);
    menuTriggerEl.addEventListener("mouseover", function(){ 
        nestedMenu.style.display="block";
    });
    
    
    nestedMenu.addEventListener("mouseout", function(){
         this.style.display="none";

    })

 });