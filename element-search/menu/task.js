

const menusWithSub =[];


Array.from(document.body.querySelectorAll('.menu_main')).forEach(element => {
    const menuArray = Array.from(element.querySelectorAll('.menu__item'));
    menuArray.forEach( element => {
        
        if(element.querySelector('.menu_sub')) {
            menusWithSub[menusWithSub.length] = element;
        }
    } )
 })

 menusWithSub.forEach(element => {
    element.querySelector('.menu__link').onclick = () =>{
        
        menusWithSub.forEach(item => item.querySelector('.menu_sub').className = 'menu menu_sub') 
        element.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
        return false;
    }
 })
