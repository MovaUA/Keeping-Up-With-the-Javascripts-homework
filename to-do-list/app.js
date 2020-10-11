import Store from '/store.js';
import Home from '/components/home/home.js';
import Signup from '/components/signup/signup.js';
import Login from '/components/login/login.js';
import Dashboard from '/components/dashboard/dashboard.js';

document.addEventListener('DOMContentLoaded', loadApp);

function loadApp() {
  const app = new App();
  app.load();
}

function App() {

  this.main = document.getElementById('main');

  this.store = new Store();

  this.load = () => this.loadHome();

  this.loadHome = () => {
    const home = new Home(this);
    home.load();
  };

  this.loadSignup = () => {
    const signup = new Signup(this);
    signup.load();
  };

  this.loadLogin = () => {
    const login = new Login(this);
    login.load();
  };

  this.loadDashboard = () => {
    const dashboard = new Dashboard(this);
    dashboard.load();
  };

}
