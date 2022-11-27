const toolitps = Array.from(document.body.querySelectorAll('.has-tooltip'));

toolitps.forEach(element => {
    element.insertAdjacentHTML('afterend',`<div class="tooltip" style="left: 0; top: 0">${element.title}</div>`)
})

function getToolTip(env) {
    Array.from(document.body.querySelectorAll('.tooltip')).forEach(tooltip => {
        tooltip.classList.remove('tooltip_active')
    })
    const coordinates = this.getBoundingClientRect();

    this.nextSibling.style['left'] = 0;
    this.nextSibling.style['top'] = 0;

    if(!this.dataset.position || this.dataset.position === 'bottom') {
        this.nextSibling.style['left'] = coordinates.left + 'px';
        this.nextSibling.style['top'] = coordinates.bottom + 'px';
        this.nextSibling.classList.add('tooltip_active');
    }
    else if (this.dataset.position === 'top') {
        this.nextSibling.classList.add('tooltip_active');
        this.nextSibling.style['top'] = coordinates.top - this.nextSibling.getBoundingClientRect().height + 'px';
        this.nextSibling.style['left'] = coordinates.left + 'px';
    }
    else if (this.dataset.position === 'left') {
        this.nextSibling.classList.add('tooltip_active');
        this.nextSibling.style['left'] = coordinates.left - this.nextSibling.getBoundingClientRect().right + 'px';
        this.nextSibling.style['top'] = coordinates.top + 'px';
    }
    else {
        this.nextSibling.classList.add('tooltip_active');
        this.nextSibling.style['left'] = coordinates.right + 'px';
        this.nextSibling.style['top'] = coordinates.top + 'px';

    }
       
    env.preventDefault();
}

toolitps.forEach(element => {element.addEventListener('click', getToolTip)});


