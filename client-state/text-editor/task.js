const myStorage = window.localStorage;

document.getElementById('btn');

let text = myStorage['text'];
if (!text) text = '';


const editor = document.getElementById('editor');
editor.value = text;
editor.addEventListener('keypress', safeText);

function safeText(env) {
    if(env.key === 'Enter') {text += '\n'}
    else{text += env.key};

    myStorage.setItem('text', text);
}

document.getElementById('btn').addEventListener('click', clearText);

function clearText(env) {
    myStorage.removeItem('text');
    text = '';
    editor.value = text;
}