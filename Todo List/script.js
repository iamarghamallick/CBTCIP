let notes = document.getElementById("todo-input")
let saveBtn = document.getElementById("save-btn")
let display = document.getElementById("display-notes")
let completedDisplay = document.getElementById("completed-task")
let count = document.getElementById("notes_count")

// keep the saveBtn disabled when nothing is typed
setInterval(() => {
    if (notes.value.length > 0) {
        saveBtn.disabled = false;
    } else {
        saveBtn.disabled = true;
    }
}, 100);

// fetching local storage data
const getLocalStorageData = () => {
    if (localStorage.getItem("TODOs") == null) {
        return []
    } else {
        return JSON.parse(localStorage.getItem("TODOs"))
    }
};

// Adding todos
let TodoList = getLocalStorageData();

// save todos button
saveBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let d = new Date()
    let saving_time = `Saved on ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} at ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    let todo = {
        Notes: notes.value,
        Time: saving_time,
        Completed: false // default value
    }
    TodoList.push(todo)
    localStorage.setItem("TODOs", JSON.stringify(TodoList))
    showtodo();
    notes.value = ""
})

// Showimg ToDo items
function showtodo() {
    let todos = ""
    let completedTodos = ""
    for (index = 0; index < TodoList.length; index++) {
        let NotesContent = TodoList[index].Notes
        let SavingTime = TodoList[index].Time
        let Completed = TodoList[index].Completed
        if (Completed == true) {
            todos += `
        <div class="show-items">
            <div class="actions">
                <h6>${SavingTime}</h6>
                <div class="action-btn">
                    <i class="fa fa-trash" onclick="removeTodo(${index})"></i>
                    <input type="checkbox" name="done" id="done" onclick="updateTodo(${index})" checked>
                </div>
            </div>
            <p>${NotesContent}</p>
        </div>
      `
            completedTodos += `
            <div class="show-items">
                    <div class="actions">
                        <h6>${SavingTime}</h6>
                        <div class="action-btn">
                            <i class="fa fa-trash" onclick="removeTodo(${index})"></i>
                        </div>
                    </div>
                    <p>${NotesContent}</p>
                </div>
            `
        } else {
            todos += `
        <div class="show-items">
            <div class="actions">
                <h6>${SavingTime}</h6>
                <div class="action-btn">
                    <i class="fa fa-trash" onclick="removeTodo(${index})"></i>
                    <input type="checkbox" name="done" id="done" onclick="updateTodo(${index})">
                </div>
            </div>
            <p>${NotesContent}</p>
        </div>
      `
        }
        count.innerText = TodoList.length
    }
    if (completedTodos === "") {
        completedDisplay.innerHTML = "No Task is marked as completed!"
        completedDisplay.style.color = "gray"
    } else {
        completedDisplay.innerHTML = completedTodos
    }
    if (TodoList.length == 0) {
        display.innerHTML = "No saved Notes found!"
        display.style.color = "gray"
    } else {
        display.innerHTML = todos
    }
}
showtodo()

//deleting todo
function removeTodo(index) {
    TodoList.splice(index, 1)
    localStorage.setItem("TODOs", JSON.stringify(TodoList))
    showtodo();
    count.innerText = TodoList.length
}

// updating todo
function updateTodo(index) {
    if (TodoList[index].Completed == true) {
        TodoList[index].Completed = false;
    } else {
        TodoList[index].Completed = true;
    }
    localStorage.setItem("TODOs", JSON.stringify(TodoList))
    showtodo();
}