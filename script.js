let todoInput = document.querySelector(".todo-input");
let addButton = document.querySelector(".todo-add-btn");
let listContainer = document.querySelector(".todo-list-container");
let clearButton = document.querySelector(".clear-all-btn");

addButton.addEventListener('click', addTodo);
listContainer.addEventListener('click', removeCheckEdit);
clearButton.addEventListener('click', clearList);

// Add Items to the Todo List
function addTodo(event) {

    event.preventDefault();
    
    if (todoInput.value !== "") {
         // Todo List div
        const todoListElements = document.createElement('div');
        todoListElements.classList.add("todo-list-elements");
        
        // Div for input value and check button
        const checkItem = document.createElement('div');
        checkItem.classList.add('check-item');
        
        // Check Button
        const checkButton = document.createElement('button');
        checkButton.classList.add('check-btn');
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        
        // Item
        const newItem = document.createElement('li');
        newItem.classList.add('list-item');
        newItem.innerText = todoInput.value;
        
        // Div for Edit and Trash Buttons
        const editTrash = document.createElement('div');
        editTrash.classList.add('edit-trash');
        
        // Edit button
        const editButton = document.createElement('button');
        editButton.classList.add('edit-btn');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        
        // Trash button
        const trashButton = document.createElement('button');
        trashButton.classList.add('trash-btn');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        

        listContainer.appendChild(todoListElements);
        todoListElements.appendChild(checkItem);
        todoListElements.appendChild(editTrash);
        checkItem.appendChild(checkButton);
        checkItem.appendChild(newItem);
        editTrash.appendChild(editButton);
        editTrash.appendChild(trashButton);

        todoInput.value = "";
        clearButton.style.display = "block";
    }
   
}


// Remove Items from the todo list

function removeCheckEdit(e) {
    
    const element = e.target;

    // remove Item
    if (element.classList[1] === 'fa-trash'){
        const todoItem = element.parentElement.parentElement.parentElement;
        listContainer = todoItem.parentElement;
        todoItem.remove();
        if (listContainer.innerHTML === '') {
            clearButton.style.display = "none";
        }
    }

    // check Item
    if (element.classList[1] === 'fa-check') {
       if (element.style.color === "rgb(0, 255, 0)") {
            element.style.color = "rgb(140, 153, 140)";
       } else {
            element.style.color = "rgb(0, 255, 0)";
       }
    }

    // // edit Item
    if (element.classList[1] === 'fa-edit') {
        const todoListElementsobj = element.parentElement.parentElement.parentElement;
        const itemValue = todoListElementsobj.childNodes[0].childNodes[1].innerText;
        todoInput.value = itemValue;
        console.log(todoListElementsobj);

    }

}

function clearList(e) {
    const button = e.target;
    appContainer = button.parentElement;
    listContainer = appContainer.childNodes[3];
    listContainer.innerHTML = "";
    clearButton.style.display = "none";
    todoInput.value = "";
}