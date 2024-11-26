document.getElementById('changeTheme').addEventListener('click', function () {
    document.body.classList.toggle('theme-dark');
    document.body.classList.toggle('theme-default');
});

// Set the initial theme
document.body.classList.add('theme-default');

// To-Do List Functionality
document.getElementById('addTask').addEventListener('click', function () {
    const taskText = document.getElementById('newTask').value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.innerText = taskText;

    // Add a button to mark the task as complete
    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.addEventListener('click', function () {
        taskItem.classList.toggle('completed');
    });

    // Add a button to remove the task
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', function () {
        taskItem.remove();
    });

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    document.getElementById('tasks').appendChild(taskItem);
    document.getElementById('newTask').value = ''; // Clear the input field
});

// Countdown Functionality
function updateCountdown() {
    const countdownTimer = document.getElementById('countdownTimer');
    const targetDate = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownTimer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        countdownTimer.innerHTML = 'HAPPY NEW YEAR!';
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
