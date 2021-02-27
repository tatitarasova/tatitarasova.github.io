const checkbox = document.getElementById('checkboxToggler');

function openMenu() {
    document.getElementById('menu').style.marginRight = '0';
}

function closeMenu() {
    document.getElementById('menu').style.marginRight = '-300px';
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