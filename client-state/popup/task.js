
const pairs = document.cookie.split('; ');
if (!pairs.find(item => item.startsWith('popup='))) {
    setTimeout(() => {document.getElementById('subscribe-modal').classList.add('modal_active')}, 2000);
}

document.body.querySelector('.modal__close').addEventListener('click', () => {
    document.getElementById('subscribe-modal').classList.remove('modal_active');
    document.cookie = `popup=shown;max-age=${60*60*24*365*30}`;
})


