

const menusWithSub = [];
const menuWithoutSub = [];

Array.from(document.body.querySelectorAll('.menu_main')).forEach(element => {
    const menuArray = Array.from(element.querySelectorAll('.menu__item'));
    menuArray.forEach( element => {
        
        if(element.querySelector('.menu_sub')) {
            menusWithSub[menusWithSub.length] = element;
        }
        else {
            menuWithoutSub[menuWithoutSub.length] = element;
        }
    } )
 })
 
 menuWithoutSub.forEach(element => {
    element.querySelector('.menu__link').onclick = () => {
        menusWithSub.forEach(item => item.querySelector('.menu_sub').className = 'menu menu_sub') 
    }
 })
 menusWithSub.forEach(element => {
    element.querySelector('.menu__link').onclick = () =>{
        if(element.querySelector('.menu_active')){
            element.querySelector('.menu_active').className = 'menu menu_sub';
        }
        else {
            menusWithSub.forEach(item => {item.querySelector('.menu_sub').className = 'menu menu_sub'});
            element.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        }
       
        return false;
    }
 })
