import {
  loadChild,
  uuidv4
} from '/lib/utils.js';

export default function TodoList(app, id) {

  this.todoLists = null;
  this.list = null;
  this.listForm = null;
  this.addItemForm = null;
  this.itemsView = null;

  this.load = () => {
    fetch('components/todo-list/todo-list.html')
      .then(response => response.text())
      .then(html => loadChild(app.main, html))
      .then(view => {
        this.todoLists = app.store.getTodoLists(app.user.id);

        const foundList = this.findListById(id);

        this.list = foundList ? foundList : {
          userId: app.user.id,
          id: uuidv4(),
          name: '',
          createdAt: Date.now(),
          items: [],
        };

        this.listForm = view.querySelector('#listForm');
        this.listForm['name'].value = this.list.name;
        this.listForm.addEventListener('submit', (e) => this.listFormSubmit(e));
        this.listError = this.listForm.querySelector('#listError');

        this.addItemForm = view.querySelector('#addItemForm');
        this.addItemForm.addEventListener('submit', (e) => this.addItemFormSubmit(e));
        this.addItemError = this.addItemForm.querySelector('#addItemError');

        this.itemsView = view.querySelector('#itemsView');
        const tempList = this.list.items;
        this.list.items = [];
        for (const item of tempList) {
          this.addItem(item);
        }
      });
  };

  this.findListById = (id) => {
    for (const list of this.todoLists) {
      if (list.id === id) {
        return list;
      }
    }
    return null;
  };

  this.findListByName = (name) => {
    for (const list of this.todoLists) {
      if (list.name === name) {
        return list;
      }
    }
    return null;
  };

  this.listFormSubmit = (e) => {
    e.preventDefault();

    const name = this.listForm['name'].value;

    if (!name) {
      this.listError.innerText = 'Name is required.';
      return;
    }

    const foundList = this.findListByName(name);

    if (foundList && foundList.id !== this.list.id) {
      this.listError.innerText = 'Another list with the same name exists.';
      return;
    }

    this.listError.innerText = '';

    this.list.name = name;
    app.store.saveTodoList(this.list);
  };

  this.addItemFormSubmit = (e) => {
    e.preventDefault();

    const todo = this.addItemForm['item'].value;

    if (!todo) {
      this.addItemError.innerText = 'Item is required.';
      return;
    }

    this.addItemError.innerText = '';
    this.addItemForm['item'].value = '';

    const item = { done: false, todo: todo };

    this.addItem(item);
  };

  this.addItem = (item) => {
    this.list.items.push(item);

    const itemDiv = document.createElement('DIV');
    itemDiv.innerHTML = '<input type="checkbox"><span></span>';

    const checkbox = itemDiv.querySelector('input');
    checkbox.checked = item.done;
    checkbox.addEventListener('change', (e) => item.done = e.target.checked);

    itemDiv.querySelector('span').innerText = item.todo;

    this.itemsView.appendChild(itemDiv);
  };

}