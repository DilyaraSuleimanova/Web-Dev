document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('task-add-btn');
    const taskList = document.getElementById('task-list');
    const progress = document.getElementById('progress');

    const progressCheck = () => {
        const total = taskList.children.length;
        const complete = taskList.getElementsByClassName('completed').length;

        progress.innerHTML = `
        <p>Total: ${total} </br> Completed: ${complete}</p>
        `;
    }

    const addTask = (text, completed = false) => {
        const taskText = taskInput.value.trim();
        if(!taskText) {
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
        <input type="checkbox" class="checkbox" ${completed ? 'checked' : ''} >
        <span>${taskText}</span>
        <div class="task-button">
            <button class="delete-btn"><img src="trash.svg" alt="trash-button"></button>
        </div>
        `;

        const checkbox = li.querySelector('.checkbox');
        

        if(completed) {
            li.classList.add('completed');
        }

        checkbox.addEventListener('change', () => {
            const isChecked = checkbox.checked;
            li.classList.toggle('completed', isChecked);
            progressCheck();
        });

        li.querySelector(".delete-btn").addEventListener('click', () => {
            li.remove();
            progressCheck();
        })

        taskList.appendChild(li);
        taskInput.value = '';
        progressCheck();
        
    }

    

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            addTask(e);
        } 
    });
});