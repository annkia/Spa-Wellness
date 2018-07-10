document.addEventListener("DOMContentLoaded", function(){
    //obsługa nested menu
  // nested menu
    const nestedMenu = document.querySelector(".nested-menu");
    const menuTriggerEl = document.querySelector(".menu-trigger-el");
    
    menuTriggerEl.addEventListener("mouseover", function() {
       nestedMenu.style.display = "block";
    });
    
    nestedMenu.addEventListener("mouseout", function() {
        this.style.display = "none";
 

    });
    //obsługa przyscisku czytaj więcej/mniej
    const readMoreLessBtns = document.querySelectorAll(".read-more-less-btn");
    
    function showHideText() {
        const siblingText = this.previousElementSibling;

        if (siblingText.style.display === "none" || siblingText.style.display === "") {
            siblingText.style.display = "block";
            this.textContent = "Czytaj mniej";
        } else {
            siblingText.style.display = "none";
            this.textContent = "Czytaj więcej";
        }
    }

    //pętla do obsługi wielu przyciskow czytaj mniej/wiecej
    for (let i = 0; i < readMoreLessBtns.length; i++) {
        readMoreLessBtns[i].addEventListener("click", showHideText);
    }
    //newsletter
    const input=document.querySelector(".newsletter-form input");
    const newsletterBtn=document.querySelector(".newsletter-form button");
    const formInfo=document.querySelector(".form-info");
    
    newsletterBtn.addEventListener("click", function(event){
        event.preventDefault();
        formInfo.style.display="block";

    if (input.value !== ""){
        formInfo.textContent="Zapisano do newslettera";
        //czyścimy pole gdy nacisnieto przycisk subskrybuj
        input.value="";
    } else{
        formInfo.textContent="Pole nie może być puste, podaj adres e-mail";

    }
        
    })
    
    
 });