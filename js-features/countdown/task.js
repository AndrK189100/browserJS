const timer = document.getElementById('timer');
const intervalID = setInterval(() =>{
    timer.textContent = setTimer()
}, 1000);


function setTimer () 
{
    const tBuffer = timer.textContent.split(':');
    let seconds = Number(tBuffer[0]) * 3600 + Number(tBuffer[1]) * 60 + Number(tBuffer[2]);
    if (seconds === 0) {
        //alert('Вы победили в конкурсе!');
        clearInterval(intervalID);
        location = 'https://www.7-zip.org/a/7z2201-extra.7z';
        return '00:00:00';
    }
    seconds -=1;
    return ('0' +Math.floor(seconds / 3600)).slice(-2) + ':' + ('0' + Math.floor((seconds % 3600 / 60))).slice(-2) + 
                    ':' + ('0' + Math.floor((seconds % 3600)) % 60).slice(-2);
}