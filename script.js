const hamMenu = document.querySelector('.logo_burger_btn');
const offScreenMenu = document.querySelector('.off-screen-menu')

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})
// slider
const slides = document.querySelectorAll(".slide")
var counter = 0;
var counterMax = 5;
// console.log(slides)
slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    if(counter > 0){
    counter--
    slideImage()  
    } else {
        counter = 5
        SlideImage()
    }
}

const goNext = () => {
    if(counter < counterMax){
        counter++
        slideImage()
    } else {
        counter = 0
        SlideImage()
    }
}

const slideImage =() => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}