Array.prototype.counter = 0;

Array.prototype.current = function (){
    return this[this.counter];
}

Array.prototype.prev = function(){
    if(this.counter === 0) {this.counter = this.length}
    return this[--this.counter];
}

Array.prototype.next = function(){
    if(this.counter ===this.length - 1){this.counter = -1}
    return this[++this.counter];
}

const slidesArray = Array.from(document.body.querySelectorAll('.slider__item'));
const dotsArray = Array.from(document.body.querySelectorAll('.slider__dot'));


document.body.querySelector('.slider__arrow_prev').onclick = prev;
document.body.querySelector('.slider__arrow_next').onclick = next;
dotsArray.forEach(dot => dot.onclick = specificSlide)

function prev() {
    slidesArray.current().classList.remove('slider__item_active');
    dotsArray.current().classList.remove('slider__dot_active');

    slidesArray.prev().classList.add('slider__item_active');
    dotsArray.prev().classList.add('slider__dot_active')
}

function next() {
    slidesArray.current().classList.remove('slider__item_active');
    dotsArray.current().classList.remove('slider__dot_active');

    slidesArray.next().classList.add('slider__item_active');
    dotsArray.next().classList.add('slider__dot_active')

    console.log(slidesArray.current().classList);
}

function specificSlide() {
    
    for(let i = 0; i < slidesArray.length; i++) {

        slidesArray[i].classList.remove('slider__item_active');
        dotsArray[i].classList.remove('slider__dot_active');
        if(this === dotsArray[i]) {
            slidesArray[i].classList.add('slider__item_active');
            dotsArray[i].classList.add('slider__dot_active');
            slidesArray.counter = i;
            dotsArray.counter = i;
        }
    }
}
