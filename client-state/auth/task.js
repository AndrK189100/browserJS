const form = document.getElementById('signin__form');
const xhr = new XMLHttpRequest();

form.addEventListener('submit', submit);


function submit(env) {

    env.preventDefault();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    //xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.addEventListener('readystatechange', getResponse);
    xhr.send(new FormData(form));
}

function getResponse(env) {
    if (xhr.readyState === xhr.DONE) {

        const rText = xhr.responseText;
    }
}
