const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', () => {

    if(xhr.readyState === xhr.DONE) {
        response = JSON.parse(xhr.responseText);
        
        let str = '';
        
        for(const item in response.response.Valute) {
            
            let valute = response.response.Valute[item];

            str += `<div class="item">\n
                   <div class="item__code">${valute.CharCode}</div>
                   <div class="item__value">${valute.Value}</div>
                   <div class="item__currency">руб.</div>\n
                   </div>`;
        }
        
        document.getElementById('items').innerHTML = str;
        document.getElementById('loader').classList.remove('loader_active');
    }
})