const menu = document.getElementById('menu');
const checkbox = document.getElementById('checkboxToggler');
const checkboxWrapper = document.getElementById('checkboxWrapper');

function openMenu() {
    menu.style.marginRight = '0';
    checkboxWrapper.style.display = "none";
}

function closeMenu() {
    menu.style.marginRight = '-300px';
    checkboxWrapper.style.display = "initial";
}

checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        openMenu();
        pageWrapper.classList.toggle('move-left', true);
    } else {
        closeMenu();
        pageWrapper.classList.toggle('move-left', false);
    }
})

main.addEventListener('click', (event) => {
    closeMenu();
}) 