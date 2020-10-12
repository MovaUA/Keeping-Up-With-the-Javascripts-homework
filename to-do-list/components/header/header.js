import {
  loadChild
} from '/lib/utils.js';

export default function Header(app) {

  this.load = () => {
    fetch('components/header/header.html')
      .then(response => response.text())
      .then(html => loadChild(app.header, html))
      .then(header => {
        const logout = header.querySelector('#logout');
        const accountSettings = header.querySelector('#account-settings');
        const dashboard = header.querySelector('#dashboard');

        if (!app.user) {
          header.style.display = 'none';
        }

        logout.addEventListener('click', () => app.logout());
        accountSettings.addEventListener('click', () => app.loadAccountSettings());
        dashboard.addEventListener('click', () => app.loadDashboard());
      });
  };

}
