let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let message = document.getElementById("message");
let taskCount = document.getElementById("taskCount");
let taskList = document.getElementById("taskList");
let count = 0;

addBtn.addEventListener("click", function() {
    let taskText = taskInput.value;
    if (taskText === "") {
        message.textContent = "Please Add Task";
        return;
    }
    message.textContent = "Task Added Successfully";
    taskInput.value = "";
    count++;
    taskCount.textContent = count;

    let li = document.createElement("li");
    taskList.appendChild(li);
    li.textContent = taskText;
    let deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = "Delete";
    li.appendChild(deleteBtn);
    let noteInput = document.createElement("input");
    noteInput.type = "text";
    noteInput.className = "noteInput";
    noteInput.placeholder = "Add a note";

    li.appendChild(noteInput);

    deleteBtn.addEventListener("click", function() {
        li.remove();
        message.textContent = "Task Deleted";
        count--;
        taskCount.textContent = count;
    });


});
