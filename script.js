const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".todo-add-btn");
const listContainer = document.querySelector(".todo-list-container");
const clearButton = document.querySelector(".clear-all-btn");

addButton.addEventListener('click', addTodo);
listContainer.addEventListener('click', removeCheckEdit);
clearButton.addEventListener('click', clearList);

// Add Items to the Todo List
function addTodo(e) {

    e.preventDefault();
    
    if (todoInput.value !== "") {
         // Todo List div
        const todoListElements = document.createElement('div');
        todoListElements.className = "todo-list-elements";
        
        // Div for input value and check button
        const checkItem = document.createElement('div');
        checkItem.className = 'check-item';
        
        // Check Button
        const checkButton = document.createElement('button');
        checkButton.className = 'check-btn';
        checkButton.innerHTML = '<i class="fas fa-check"></i>';
        
        // Item
        const newItem = document.createElement('li');
        newItem.className = 'list-item';
        newItem.innerText = todoInput.value;

        const textEdit = document.createElement('input');
        textEdit.type = 'text';
        textEdit.className = 'text-edit';
        textEdit.value = todoInput.value;
        
        // Div for Edit and Trash Buttons
        const editTrash = document.createElement('div');
        editTrash.className ='edit-trash';
        
        // Edit button
        const editButton = document.createElement('button');
        editButton.className = 'edit-btn';
        editButton.innerHTML = '<i class="fas fa-edit"></i>';

        // Save Button 
        const saveButton = document.createElement('button');
        saveButton.className = 'save-btn';
        saveButton.innerHTML = '<i class="fas fa-save"></i>';
        
        // Trash button
        const trashButton = document.createElement('button');
        trashButton.className = 'trash-btn';
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        

        listContainer.appendChild(todoListElements);
        todoListElements.appendChild(checkItem);
        todoListElements.appendChild(editTrash);
        checkItem.appendChild(checkButton);
        checkItem.appendChild(newItem);
        checkItem.appendChild(textEdit);
        editTrash.appendChild(editButton);
        editTrash.appendChild(saveButton);
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
        const listContainer = element.parentElement.parentElement.parentElement.parentElement;
        const todoItem = element.parentElement.parentElement.parentElement;
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
        const editButton = element.parentElement;
        const saveButton = element.parentElement.parentElement.childNodes[1];
        
        editButton.style.display = "none";
        saveButton.style.display = "block";

        const textEdit = saveButton.parentElement.parentElement.childNodes[0].childNodes[2];
        textEdit.style.display = "block";

        const item = saveButton.parentElement.parentElement.childNodes[0].childNodes[1];
        item.style.display = "none";

    }

    if (element.classList[1] === 'fa-save') {
        const saveButton = element.parentElement;
        const editButton = element.parentElement.parentElement.childNodes[0];

        saveButton.style.display = "none";
        editButton.style.display = "block";

        const textEdit = saveButton.parentElement.parentElement.childNodes[0].childNodes[2];
        
        const item = saveButton.parentElement.parentElement.childNodes[0].childNodes[1];
        item.innerText = textEdit.value;

        item.style.display = "block";
        textEdit.style.display = "none";

    }

}

function clearList(e) {
    const button = e.target;
    // appContainer = button.parentElement;
    listContainer.innerHTML = "";
    clearButton.style.display = "none";
    todoInput.value = "";
}