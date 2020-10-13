import {
  loadChild
} from '/lib/utils.js';

export default function Dashboard(app) {

  this.load = () => {
    fetch('components/dashboard/dashboard.html')
      .then(response => response.text())
      .then(html => loadChild(app.main, html))
      .then(dashboard => {
        const createButton = dashboard.querySelector('.create');
        createButton.addEventListener('click', () => app.loadTodoList());

        const todoLists = app.store.getTodoLists(app.user.id);
        todoLists.sort((a, b) => a.createdAt - b.createdAt);

        const table = dashboard.querySelector('#to-do-list');
        const tbody = table.getElementsByTagName('TBODY')[0];

        for (let i = 0; i < todoLists.length; i++) {
          const todoList = todoLists[i];

          const row = document.createElement('TR');

          const no = document.createElement('TD');
          no.innerText = i + 1;
          row.appendChild(no);

          const name = document.createElement('TD');
          name.innerText = todoList.name;
          row.appendChild(name);

          const createdAt = document.createElement('TD');
          createdAt.innerText = new Date(todoList.createdAt).toLocaleString();
          row.appendChild(createdAt);

          const open = document.createElement('BUTTON');
          open.innerText = 'Open'
          open.addEventListener('click', () => app.loadTodoList(todoList.id));
          row.appendChild(open);

          tbody.appendChild(row);
        }
      });
  };

}