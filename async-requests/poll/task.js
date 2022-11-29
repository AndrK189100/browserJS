
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {

    if (request.readyState === request.DONE) {
        let answer = JSON.parse(request.responseText);
        document.getElementById('poll__title').textContent = answer.data.title;
        document.getElementById('poll__title').setAttribute('data-vote_id', answer.id);

        let str ='';
        
        for(let i = 0; i< answer.data.answers.length; i++){
            str +=`<button class="poll__answer" data-answer_id=${i}>${answer.data.answers[i]}</button>\n`;
        }
        document.getElementById('poll__answers').innerHTML = str;

        Array.from(document.body.querySelectorAll('.poll__answer')).forEach( element => {
            element.addEventListener('click', sendPost )
        })
    }
})

function sendPost(env) {
    alert('Спасибо, ваш голос засчитан!');
                const request = new XMLHttpRequest();
                let answer;
                request.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
                request.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                request.addEventListener('readystatechange', () => {
                    if (request.readyState === request.DONE) {
                        answer = JSON.parse(request.responseText);
                        str = `<h2>Результаты голосования по опросу</h2><h3>${document.getElementById('poll__title').textContent}</h3>`;
                        for(let i = 0; i < answer.stat.length; i++) {
                            str += `<br>${answer.stat[i].answer}: ${answer.stat[i].votes} голосов.`
                        }
                        document.getElementById('poll__title').innerHTML = str;
                        document.getElementById('poll__answers').innerHTML = '';
                    }
                })
                request.send( `vote=${document.getElementById('poll__title').dataset.vote_id}&answer=${env.target.dataset.answer_id}` );
}


request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.send();

