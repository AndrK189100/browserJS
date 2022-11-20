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
    slidesArray.current().className = 'slider__item';
    dotsArray.current().className = 'slider__dot';

    slidesArray.prev().className = 'slider__item slider__item_active';
    dotsArray.prev().className = 'slider__dot slider__dot_active';
}

function next() {
    slidesArray.current().className = 'slider__item';
    dotsArray.current().className = 'slider__dot';

    slidesArray.next().className = 'slider__item_active';
    dotsArray.next().className = 'slider__dot slider__dot_active';
}

function specificSlide() {
    
    for(let i = 0; i < slidesArray.length; i++) {

        slidesArray[i].className = 'slider__item';
        dotsArray[i].className = 'slider__dot';
        if(this === dotsArray[i]) {
            slidesArray[i].className = 'slider__item slider__item_active';
            dotsArray[i].className = 'slider__dot slider__dot_active';
            slidesArray.counter = i;
            dotsArray.counter = i;
        }
    }
}
