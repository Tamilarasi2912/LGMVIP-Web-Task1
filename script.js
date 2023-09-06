document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const messageBox = document.getElementById("messageBox");

    addTaskButton.addEventListener("click", function() {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span class="task-text">${taskText}</span>
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
            addDeleteListener(listItem);
            addTaskClickListener(listItem);
            showMessage("Task added successfully");
        }
    });

    function addDeleteListener(listItem) {
        const deleteButton = listItem.querySelector(".delete");
        deleteButton.addEventListener("click", function() {
            listItem.remove();
            showMessage("Task deleted successfully");
        });
    }

    function addTaskClickListener(listItem) {
        const taskText = listItem.querySelector(".task-text"); // Select the task text
        taskText.addEventListener("click", function() {
            taskText.classList.toggle("completed");
        });
    }

    taskInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });

    function showMessage(message) {
        messageBox.textContent = message;
        messageBox.style.display = "block";

        setTimeout(function() {
            messageBox.style.display = "none";
        }, 3000);
    }
});
