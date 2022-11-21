class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.timer = container.querySelector('.status__timer');
    
    this.reset();
    this.intervalID = this.setTimer();
    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  setTimer() 
  {
    const z =this;
    this.timer.textContent = '00:00:05';

    return setInterval(() =>{
      this.timer.textContent = getTime();
      if(this.timer.textContent === '-1:-1:-1') {
        this.fail();
      }
    }, 1000);
    
    function getTime() {
      const tBuffer = z.timer.textContent.split(':');
      let seconds = Number(tBuffer[0]) * 3600 + Number(tBuffer[1]) * 60 + Number(tBuffer[2]);
      seconds -=1;
      return ('0' + Math.floor(seconds / 3600)).slice(-2) + ':' + ('0' + Math.floor((seconds % 3600 / 60))).slice(-2) + 
                        ':' + ('0' + Math.floor((seconds % 3600)) % 60).slice(-2);
      }
  }
  
  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода слова вызываем this.success()
      При неправильном вводе символа - this.fail();
     */
    
      document.addEventListener('keypress', keyDown);
      const z = this;
      
      function keyDown(event){
        if(event.key.toLowerCase() === z.currentSymbol.textContent.toLowerCase()){
          z.success();
        }
        else {z.fail()}

      }

  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
    clearInterval(this.intervalID);
    this.intervalID = this.setTimer();
    
    
  }

  fail() {
    
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();

      
    }
    this.setNewWord();
    clearInterval(this.intervalID);
    this.intervalID = this.setTimer();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

