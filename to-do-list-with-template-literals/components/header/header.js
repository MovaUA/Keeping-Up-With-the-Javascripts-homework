import {
  loadChild
} from '/lib/utils.js';

export default function Header(app) {

  this.load = () => {
    fetch('components/header/header.html')
      .then(response => response.text())
      .then(html => loadChild(app.header, html))
      .then(header => {
        if (!app.user) {
          header.style.display = 'none';
          return;
        }

        const welcome = header.querySelector('#welcome');
        welcome.innerText = `Welcome, ${app.user.firstName} ${app.user.lastName}!`;

        const logout = header.querySelector('#logout');
        const accountSettings = header.querySelector('#account-settings');
        const dashboard = header.querySelector('#dashboard');

        logout.addEventListener('click', () => app.logout());
        accountSettings.addEventListener('click', () => app.loadAccountSettings());
        dashboard.addEventListener('click', () => app.loadDashboard());
      });
  };

}
