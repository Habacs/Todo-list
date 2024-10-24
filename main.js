const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function createTask(taskText)
{
    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    li.appendChild(taskSpan);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add=('delete-btn');
    li.appendChild(deleteBtn);

    taskSpan.addEventListener('click', function(){
        taskSpan.classList.toggle('Completed');
    });

    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    taskList.appendChild(li);

}

addTaskBtn.addEventListener('click', function(){
    const taskText = taskInput.value;

    if(taskText.trim() !== ''){
        createTask(taskText);
    }
    taskInput.value = '';
});

taskInput.addEventListener( function(event){
    if(event.key = 'Enter'){
        addTaskBtn.click();
    }
});