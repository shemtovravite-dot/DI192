const tasks = []; // array of task objects
let taskCounter = 0; // unique task_id

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const listDiv = document.querySelector(".listTasks");

// Function to add a task
function addTask(e) {
    e.preventDefault(); // prevent form submission

    const text = input.value.trim();
    if (text === "") return; // ignore empty input

    const task = {
        task_id: taskCounter,
        text: text,
        done: false
    };

    tasks.push(task);
    renderTask(task);

    taskCounter++;
    input.value = ""; // clear input
}

// Function to render a single task in the DOM
function renderTask(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task-item");
    taskDiv.setAttribute("data-task-id", task.task_id);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => doneTask(task.task_id));

    const label = document.createElement("label");
    label.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<i class="fas fa-xmark"></i>';
    deleteBtn.addEventListener("click", () => deleteTask(task.task_id));

    const leftDiv = document.createElement("div");
    leftDiv.appendChild(checkbox);
    leftDiv.appendChild(label);

    taskDiv.appendChild(leftDiv);
    taskDiv.appendChild(deleteBtn);

    listDiv.appendChild(taskDiv);
}

// Function to mark task as done
function doneTask(id) {
    const task = tasks.find(t => t.task_id === id);
    if (!task) return;

    task.done = !task.done; // toggle done

    const taskDiv = document.querySelector(`.task-item[data-task-id="${id}"]`);
    if (task.done) {
        taskDiv.classList.add("done");
    } else {
        taskDiv.classList.remove("done");
    }
}

// Function to delete task
function deleteTask(id) {
    const index = tasks.findIndex(t => t.task_id === id);
    if (index === -1) return;

    tasks.splice(index, 1); // remove from array

    const taskDiv = document.querySelector(`.task-item[data-task-id="${id}"]`);
    taskDiv.remove(); // remove from DOM
}

// Event listener for form submit
form.addEventListener("submit", addTask);