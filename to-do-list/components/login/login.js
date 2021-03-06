import {
  removeAllChildren,
  loadChild
} from '/lib/utils.js';
import '/lib/sha256.min.js';

export default function Login(app) {

  this.load = () => {
    fetch('components/login/login.html')
      .then(response => response.text())
      .then(html => loadChild(app.main, html))
      .then(node => {
        const form = node.querySelector('#form');
        form.addEventListener('submit', e => this.submitForm(e));
      });
  };

  this.getLoggedInUser = () => {
    try {
      const userId = window.sessionStorage.getItem('user.id');
      return app.store.getUserById(userId);
    } catch {
      return null;
    }
  };

  this.submitForm = (e) => {
    e.preventDefault();

    const data = this.getFormData(e.target);
    const errors = this.validateFormData(data);
    this.displayErrors(e.target, errors);
    const isValid = errors.length === 0;

    if (!isValid) return;

    const user = app.store.users.get(data.email);
    window.sessionStorage.setItem('user.id', user.id);
    app.user = user;

    app.loadDashboard();
  };

  this.getFormData = (form) => {
    return {
      email: form['email'].value,
      password: form['password'].value,
    };
  }

  this.validateFormData = (data) => {
    const errors = [];

    if (!data.email) {
      errors.push('Email is required.');
    }
    if (!data.password) {
      errors.push('Password is required.');
    }

    if (!data.email || !data.password) {
      return errors;
    }

    const user = app.store.users.get(data.email);
    if (!user || sha256(data.password) !== user.password) {
      errors.push('Invalid email and/or password.');
    }

    return errors;
  }

  this.displayErrors = (form, errors) => {
    const errorsContainer = form.querySelector('#errors');
    removeAllChildren(errorsContainer);

    const addError = function (message) {
      const error = document.createElement('li');
      error.innerText = message;
      errorsContainer.appendChild(error);
    }

    for (let error of errors) {
      addError(error);
    }
  }

}