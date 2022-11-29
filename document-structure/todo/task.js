const myStorage = window.localStorage;
let taskCount = 0;

function init() {
    const  taskList = document.body.querySelector('#tasks__list');
    let key;
    const arrayTasks = [];

    for (let i = 0; i < myStorage.length; i++) {
        let key = myStorage.key(i);
        let textHTML = myStorage.getItem(key);
        arrayTasks.push({[key]: textHTML});
    }

    arrayTasks.sort((x, y) => {return Number(Object.keys(x)[0]) -  Number(Object.keys(y)[0])});


    arrayTasks.forEach( item => {
        let key = Object.keys(item)[0];
        let taskHTML = myStorage.getItem(key);
        const task = document.createElement('div');
        task.classList.add('task');
        task.setAttribute('data-task_id', key);
        task.innerHTML = taskHTML;
        taskList.appendChild(task);
        task.addEventListener('click', taskRemove);
        if(Number(key) > taskCount) {
            taskCount = Number(key);
        }


    })
}

function taskAdd(env) {

   const task = document.createElement('div');
   task.classList.add('task');
   task.setAttribute('data-task_id', ++taskCount);
       
   const input = document.body.querySelector('#task__input');
   
   if (input.value) {
        task.innerHTML = ` <div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>`

        const  taskList = document.body.querySelector('#tasks__list');
        taskList.appendChild(task);
        input.value = '';
        
        myStorage.setItem(task.dataset.task_id, task.innerHTML);
        task.addEventListener('click', taskRemove);
   }
}

function taskRemove(env) {
  const  taskList = document.body.querySelector('#tasks__list');
  task = this.closest('.task');

  taskList.removeChild(task);
  myStorage.removeItem(task.dataset.task_id); 
}

init();
document.body.querySelector('#tasks__add').addEventListener('click', taskAdd);