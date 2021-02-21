const toggler = document.querySelector(".toggler");
const menuWrapper = document.querySelector(".menu-wrapper");

/* Toggle mobile menu */
function toggleMenu() {
    if (menuWrapper.classList.contains("on")) {
        menuWrapper.classList.remove("on");
        // adds the menu (hamburger) icon
        toggler.innerHTML = '<i class="fas fa-music fa-lg"></i>';
    } else {
        menuWrapper.classList.add("on");
         
        // adds the close (x) icon
        toggler.innerHTML = '<i class="fas fa-times fa-lg"></i>';
    }
}

/* Event Listener */
toggler.addEventListener("click", toggleMenu, false);