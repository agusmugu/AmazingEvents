const navToggle = document.querySelector(".nav-toggle")
const navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () =>{
    navMenu.classList.toggle("nav-menu_visible")
    if (navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("arial-label", "Close menu");
    }else{
        navToggle.setAttribute("arial-label", "Open menu");
    }

})