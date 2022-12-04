const myStorage = window.localStorage;

const editor = document.getElementById('editor');
editor.value = myStorage.getItem('text')
editor.addEventListener('input', safeText);

function safeText(env) {
    myStorage.setItem('text', editor.value);
}

document.getElementById('btn').addEventListener('click', clearText);

function clearText(env) {
    myStorage.removeItem('text');
    editor.value = '';
}