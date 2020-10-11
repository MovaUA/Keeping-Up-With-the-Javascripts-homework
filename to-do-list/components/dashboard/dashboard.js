import {
  removeAllChildren,
  loadChild
} from '/utils.js';

export default function Dashboard(app) {

  this.load = () => {
    fetch('components/dashboard/dashboard.html')
      .then(response => response.text())
      .then(html => loadChild(app.main, html))
      .then(dashboard => {
      });
  };

}