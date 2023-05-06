//3.Create a class called "TodoList" with an array property to hold the list items and
// methods to add and delete items from the list.


//// Define the TodoList class with methods to add and delete items from the list

class TodoList {
    constructor() {
      this.items = [];
    }
  
    add(item) {
      this.items.push(item);
    }
  
    delete(index) {
      this.items.splice(index, 1);
    }
  }
  
  //Create an instance of the TodoList clas

  const todoList = new TodoList();

  // Get references to the form, input, and list elements
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');


  // Add an event listener to the form's submit event

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItem = input.value.trim();
    if (newItem) {
      todoList.add(newItem);
      renderList();

      // Clear the input field
      input.value = '';
    }
  });

  // Define a function to render the list of todo items
  
  function renderList() {
    list.innerHTML = '';
    todoList.items.forEach((item, index) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = 'Delete';
      button.addEventListener('click', () => {
        todoList.delete(index);
        renderList();
      });
      li.textContent = item;
      li.appendChild(button);
      list.appendChild(li);
    });
  }
  
  renderList();




