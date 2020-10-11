import {
  removeAllChildren,
  loadChild
} from '/lib/utils.js';

export default function Dashboard(app) {

  this.load = () => {
    fetch('components/dashboard/dashboard.html')
      .then(response => response.text())
      .then(html => loadChild(app.main, html))
      .then(dashboard => {
        const todos = app.store.getTodoList(app.user.email);
        const table = dashboard.querySelector('#to-do-list');
      });
  };

}