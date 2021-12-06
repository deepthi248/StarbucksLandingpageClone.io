var hamburgetButton = document.getElementById('hamburgerButton');
var displayMenu = document.getElementById('menu')
var hamburgerAction = () => {
    hamburgetButton.classList.toggle('open')
    displayMenu.classList.toggle('hidden')
    document.getElementById('body').classList.toggle('no-scroll')
}

hamburgetButton.addEventListener('click', hamburgerAction)