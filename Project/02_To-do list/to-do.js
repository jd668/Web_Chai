document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('todo-input').addEventListener('keypress', function (event) {
        if(event.key==='Enter'){
            addTask();
        }
    });
});

function addTask(){
    const taskInput = document.getElementById('todo-list');
    const taskText = taskInput.value.trim();

    if (taskText===''){
        alert('Please enter a task');
        return;
    }
    
}