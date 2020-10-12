import Store from '/lib/store.js';
import Header from '/components/header/header.js';
import Home from '/components/home/home.js';
import Signup from '/components/signup/signup.js';
import Login from '/components/login/login.js';
import Dashboard from '/components/dashboard/dashboard.js';
import TodoList from '/components/todo-list/todo-list.js';

document.addEventListener('DOMContentLoaded', loadApp);

function loadApp() {
  const app = new App();
  app.load();
}

function App() {

  this.main = document.getElementById('main');
  this.header = document.getElementById('header');

  this.store = new Store(window.localStorage);
  this.login = new Login(this);
  this.user = null;

  this.load = () => {
    this.user = this.login.getLoggedInUser();
    this.loadHeader();
    this.user ? this.loadDashboard() : this.loadHome();
  };

  this.loadHeader = () => {
    const header = new Header(this);
    header.load();
  };

  this.loadHome = () => {
    this.loadHeader();
    const home = new Home(this);
    home.load();
  };

  this.loadSignup = () => {
    this.loadHeader();
    const signup = new Signup(this);
    signup.load();
  };

  this.loadLogin = () => {
    this.loadHeader();
    this.login.load();
  };

  this.loadDashboard = () => {
    this.loadHeader();
    const dashboard = new Dashboard(this);
    dashboard.load();
  };

  this.loadTodoList = (id) => {
    this.loadHeader();
    const todoList = new TodoList(this, id);
    todoList.load();
  };

  this.logout = () => {
    window.sessionStorage.removeItem('user.id');
    this.load();
  };

  this.loadAccountSettings = () => {
    this.loadHeader();
    this.load();
  };

}
