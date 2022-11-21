const tabs = Array.from(document.body.querySelectorAll('.tab'));
const tabsContent = Array.from(document.body.querySelectorAll('.tab__content'))

tabs.forEach( item => item.addEventListener('click', tabClick));

function tabClick() {

    for(let i =0; i < tabs.length; i++) {
        tabs[i].classList.remove('tab_active');
        tabsContent[i].classList.remove('tab__content_active');
        if(tabs[i] === this) {
            tabs[i].classList.add('tab_active');
            tabsContent[i].classList.add('tab__content_active');
        }
    }
}