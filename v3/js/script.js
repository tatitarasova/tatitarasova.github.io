const checkbox = document.getElementById('checkbox-toggler');
const main = document.getElementById('main');

function openMenu() {
    document.getElementById('menu').style.marginRight = '0';
    // document.getElementById('main').style.marginLeft = '-250px';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, .7)';
}

function closeMenu() {
    document.getElementById('menu').style.marginRight = '-250px';
    // document.getElementById('main').style.marginLeft = '0';
    document.body.style.backgroundColor = 'rgb(15, 15, 15)';
}

checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        openMenu();
    } else {
        closeMenu();
    }
})

main.addEventListener('onclick', (event) => {
    closeMenu();
}) 