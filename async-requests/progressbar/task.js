const form = document.getElementById('form');

form.addEventListener('submit', sendFile);

function sendFile(env) {
    const progress = document.getElementById('progress');
    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.addEventListener('progress', (env) => {
        progress.value = env.loaded / env.total;
        //console.log(env.loaded);
    })

    xhr.upload.addEventListener('loadend', (env) => {
        progress.value = 1;
        //console.log('end');
    })
    formData = new FormData(form);
    xhr.send(formData);

    env.preventDefault();
}

