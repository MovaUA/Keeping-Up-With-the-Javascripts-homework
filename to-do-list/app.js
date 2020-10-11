import Store from '/lib/store.js';
import Home from '/components/home/home.js';
import Signup from '/components/signup/signup.js';
import Login from '/components/login/login.js';
import Dashboard from '/components/dashboard/dashboard.js';
import TodoList from '/components/todo-list/todo-list.js';

document.addEventListener('DOMContentLoaded', loadApp);

function loadApp() {
  const app = new App();
  app.user = app.login.getLoggedInUser();
  app.load();
}

function App() {

  this.main = document.getElementById('main');

  this.store = new Store(window.localStorage);

  this.login = new Login(this);

  this.user = null;

  this.load = () => this.user ? this.loadDashboard() : this.loadHome();

  this.loadHome = () => {
    const home = new Home(this);
    home.load();
  };

  this.loadSignup = () => {
    const signup = new Signup(this);
    signup.load();
  };

  this.loadLogin = () => this.login.load();

  this.loadDashboard = () => {
    const dashboard = new Dashboard(this);
    dashboard.load();
  };

  this.loadTodoList = (id) => {
    const todoList = new TodoList(this, id);
    todoList.load();
  };

}
