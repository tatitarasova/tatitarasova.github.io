const menu = document.getElementById('menu');
const checkbox = document.getElementById('checkboxToggler');
// const checkboxWrapper = document.getElementById('checkboxWrapper');
const main = document.getElementById('main');
const footer = document.getElementById('footer');

function openMenu() {
    menu.style.marginRight = '0';
    // checkboxWrapper.classList.toggle('fix-position', true);
    // pageWrapper.classList.toggle('move-left', true);
    main.classList.toggle('move-left', true);
    // checkboxWrapper.style.display = "none";
    footer.classList.toggle('move-left', true);

}

function closeMenu() {
    menu.style.marginRight = '-300px';
    // checkboxWrapper.classList.toggle('fix-position', false);
    // pageWrapper.classList.toggle('move-left', false);
    main.classList.toggle('move-left', false);
    // checkboxWrapper.style.display = "initial";
    footer.classList.toggle('move-left', false);
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