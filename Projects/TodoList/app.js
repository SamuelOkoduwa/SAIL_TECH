"use strict";
// Acquiring the element
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
// List storage in an empty Array
let tasks = [];
// Function to add task
function addTask() {
    const task = taskInput.value.trim(); //trim removes white spaces
    if (task !== "") {
        tasks.push(task);
        displayTasks();
        taskInput.value = "";
    }
}
// // Function to modify
function modifyTask(num) {
    const newTask = prompt('Enter the new task', tasks[num]);
    if (newTask !== null) {
        tasks.splice(num, 1, newTask);
        displayTasks();
    }
}
//  Function to delete task
function deleteTask(num) {
    if (confirm("Are you sure you want to delete?")) {
        tasks.splice(num, 1);
        displayTasks();
    }
}
// // Function to display Tasks
function displayTasks() {
    let displayList = '';
    for (let index = 0; index < tasks.length; index++) {
        displayList += `<li>${tasks[index]} <button onclick="modifyTask(${index})">Edit</button> <button onclick="deleteTask(${tasks[index]})">CompleteTask</button></li>`;
    }
    ;
    taskList.innerHTML = displayList;
    // taskList.innerHTML = "";
    // tasks.forEach((task, num) => {
    //     const li = document.createElement('li');
    // })
}
// displayTasks()
