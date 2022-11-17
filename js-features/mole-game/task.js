const elementDead = document.getElementById('dead');
const elementLost = document.getElementById('lost');
let dead = 0, lost = 0;

for(let i=1; i<10; i++){
 
    document.getElementById(`hole${i}`).onclick = () => {
        console.log(document.getElementById(`hole${i}`).className);
        if(document.getElementById(`hole${i}`).classList.contains('hole_has-mole')){
            dead +=1;
            elementDead.textContent = dead;
        }
        else {
            lost += 1;
            elementLost.textContent = lost;
        }

        if (dead + lost === 10) { 
            if (dead > lost) alert('WIN')
            else if (lost > dead) alert('LOSS')
            else alert('DRAW');
            
            dead = 0; lost = 0;
            elementDead.textContent = dead;
            elementLost.textContent = lost;
        }
    }
}