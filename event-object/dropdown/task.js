document.body.querySelector('.dropdown__value').addEventListener('click', 
                                () => document.body.querySelector('.dropdown__list').classList.toggle('dropdown__list_active'));

Array.from(document.body.querySelectorAll('.dropdown__link')).forEach( item => {item.addEventListener('click', selectItem)});

function selectItem(event) {
    document.body.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    document.body.querySelector('.dropdown__value').textContent = this.textContent;
    event.preventDefault();
}