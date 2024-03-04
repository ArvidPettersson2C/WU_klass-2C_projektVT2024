// hamburgermeny
const burger = document.getElementById('burger')
const linkList = document.getElementById('burger_link_list')

function toggleMenu() {
    linkList.classList.toggle('links_visible')
    burger.classList.toggle('burger_in_x_form')
}

burger.addEventListener('click', toggleMenu)
