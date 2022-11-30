const myStorage = window.localStorage;
let todo = [];
let taskCount = 0;

function init() {
    const  taskList = document.body.querySelector('#tasks__list');
    if(myStorage.getItem('todo_homework')) {
        todo = JSON.parse(myStorage.getItem('todo_homework'));
    }
    
    todo.forEach( item => {
        itemObject = JSON.parse(item);
        const task = document.createElement('div');
        task.classList.add('task');
        task.setAttribute('data-task_id', itemObject.id);
        task.innerHTML = itemObject.task;
        taskList.appendChild(task);
        task.addEventListener('click', taskRemove);
        if(Number(itemObject.id) > taskCount) {
            taskCount = Number(itemObject.id);
        }


    })
}

function taskAdd(env) {

   const task = document.createElement('div');
   task.classList.add('task');
   task.setAttribute('data-task_id', ++taskCount);
       
   const input = document.body.querySelector('#task__input');
   
   if (input.value.trim()) {
        task.innerHTML = ` <div class="task__title">${input.value}</div>
        <a href="#" class="task__remove">&times;</a>`

        const  taskList = document.body.querySelector('#tasks__list');
        taskList.appendChild(task);
        input.value = '';
        todo.push(JSON.stringify({id: task.dataset.task_id, task: task.innerHTML}))
        myStorage.setItem('todo_homework', JSON.stringify(todo));
        task.addEventListener('click', taskRemove);
   }
   else {input.value = ''}
   env.preventDefault();
}


function taskRemove(env) {
  const  taskList = document.body.querySelector('#tasks__list');
  task = this.closest('.task');
  todo.splice(todo.indexOf(JSON.stringify({id: task.dataset.task_id, task: task.innerHTML})),1) 
  taskList.removeChild(task);
  myStorage.setItem('todo_homework', JSON.stringify(todo)); 
}

init();
document.body.querySelector('#tasks__add').addEventListener('click', taskAdd);