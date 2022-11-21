document.body.querySelector('.dropdown__value').addEventListener('click', dropDown);

Array.from(document.body.querySelectorAll('.dropdown__link')).forEach( item => {item.addEventListener('click', selectItem)});


function dropDown() {
    if(document.body.querySelector('.dropdown__list').classList.contains('dropdown__list_active')) {
        document.body.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    }
    else {
        document.body.querySelector('.dropdown__list').classList.add('dropdown__list_active');
    }
        

}

function selectItem(event) {
    document.body.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    document.body.querySelector('.dropdown__value').textContent = this.textContent;
    event.preventDefault();
}