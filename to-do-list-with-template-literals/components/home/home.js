import {
  loadChild
} from '/lib/utils.js';

export default function Home(app) {

  this.load = () => {
    fetch('components/home/home.html')
      .then(response => response.text())
      .then(html => loadChild(app.main, html))
      .then(home => {
        const signup = home.querySelector('#signup');
        const login = home.querySelector('#login');

        signup.addEventListener('click', () => app.loadSignup());
        login.addEventListener('click', () => app.loadLogin());
      });
  };

}
