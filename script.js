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
        slide.style.left = `${index * 47}%`
    }
)

const goPrev = () => {
    if(counter > 1){
    counter--
    slideImage()  
    } else {
        counter = 6
        SlideImage()
    }
}

const goNext = () => {
    if(counter < counterMax){
        counter++
        slideImage()
    } else {
        counter = -1
        SlideImage()
    }
}

const slideImage =() => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 147}%)`
        }
    )
}