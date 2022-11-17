

let images = document.querySelectorAll('.content');   //gives a nodelist of all image tags
let icons = document.querySelectorAll('nav ul li');

icons.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllImages();
        hideAllIcons();

        item.classList.add('active');
        images[idx].classList.add('show');
        
    })
})

function hideAllImages() {
    images.forEach((img) => {
        img.classList.remove('show');
    })
}

function hideAllIcons() {
    icons.forEach((item) => {
        item.classList.remove('active');
    })
}