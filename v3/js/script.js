const menu = document.getElementById('menu');
const checkbox = document.getElementById('checkboxToggler');
const checkboxWrapper = document.getElementById('checkboxWrapper');

function openMenu() {
    menu.style.marginRight = '0';
    checkboxWrapper.classList.toggle('fix-position', true);
    pageWrapper.classList.toggle('move-left', true);
    // checkboxWrapper.style.display = "none";
}

function closeMenu() {
    menu.style.marginRight = '-300px';
    checkboxWrapper.classList.toggle('fix-position', false);
    pageWrapper.classList.toggle('move-left', false);
    // checkboxWrapper.style.display = "initial";
}

checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        openMenu();
        
    } else {
        closeMenu();
    }
})

main.addEventListener('click', (event) => {
    closeMenu();
}) 