//3.Create a class called "TodoList" with an array property to hold the list items and
// methods to add and delete items from the list.

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
  
  const todoList = new TodoList();
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItem = input.value.trim();
    if (newItem) {
      todoList.add(newItem);
      renderList();
      input.value = '';
    }
  });
  
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




