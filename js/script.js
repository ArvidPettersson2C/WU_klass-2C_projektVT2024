// hamburgermeny
const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')

function toggleMenu() {
    linkList.classList.toggle('links_visible')
    burger.classList.toggle('burger_in_x_form')
}

burger.addEventListener('click', toggleMenu)



// kaffeknapp

const coffeeButton = document.getElementById('coffee_maker')
const nr_of_cups_html = document.getElementById('nr_of_cups')
var nr_of_cups = 0

function incrementCups() {
    nr_of_cups = nr_of_cups + 1
    nr_of_cups_html.innerHTML = nr_of_cups

}

coffeeButton.addEventListener('click', incrementCups)


// bildspel

const arrowLeft = document.getElementById('arrow_left')
const arrowRight = document.getElementById('arrow_right')

var imgGalleryImgSources = ["img/bildspel/bildspel_1.jpg", "img/bildspel/bildspel_2.jpg", "img/bildspel/bildspel_3.jpg", "img/bildspel/bildspel_4.jpg", "img/bildspel/bildspel_5.jpg", "img/bildspel/bildspel_6.jpg"]
var imgGalleryIndex = 0

function newImageRight() {
    if (imgGalleryIndex == imgGalleryImgSources.length - 1) {imgGalleryIndex = 0}
    else {imgGalleryIndex = imgGalleryIndex + 1}
    document.getElementById('gallery_img').src = imgGalleryImgSources[imgGalleryIndex]
}

function newImageLeft() {
    if (imgGalleryIndex == 0) {imgGalleryIndex = imgGalleryImgSources.length - 1}
    else {imgGalleryIndex = imgGalleryIndex - 1}
    document.getElementById('gallery_img').src = imgGalleryImgSources[imgGalleryIndex]
}

arrowLeft.addEventListener('click', newImageLeft)
arrowRight.addEventListener('click', newImageRight)