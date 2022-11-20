document.getElementById('modal_main').className += ' modal_active';

Array.from(document.body.querySelectorAll('.modal__close')).forEach( element =>{

    if(element.classList.contains('show-success')) {
        element.onclick = (() => {
            element.closest('.modal').className = 'modal';
            document.getElementById('modal_success').className += ' modal_active';
        })
    }
    else element.onclick = (() => element.closest('.modal').className = 'modal');
})



