class RotatorArray extends Array {

    constructor(arrayLength, ...items) {
        super(arrayLength, ...items);
        this.counter = 0;
    }

    next() {
        if(this.counter === this.length -1) this.counter = -1;
        return this[++this.counter];
    }

    current() {
        return this[this.counter]
    }
}

class Rotator
{
    
    constructor(rotator) {
        this.rotator = rotator;
        this.interval = this.rotator.current().dataset.speed;
        //this.interval = 1000;
    }

    setRotator () {
        this.intervalID = setInterval(() => this.changeAdv(), this.interval);
    }

    changeAdv() {
        this.rotator.current().classList.toggle('rotator__case_active');
        this.rotator.next();
        this.rotator.current().style.color = this.rotator.current().dataset.color;
        this.interval = this.rotator.current().dataset.speed;
        this.rotator.current().classList.toggle('rotator__case_active');
        
        clearInterval(this.intervalID);
        this.intervalID = setInterval(() => this.changeAdv(), this.interval);

    }
}

Array.from(document.body.querySelectorAll('.rotator')).forEach(rotator => {
    new Rotator(RotatorArray.from(rotator.querySelectorAll('.rotator__case'))).setRotator();
})
