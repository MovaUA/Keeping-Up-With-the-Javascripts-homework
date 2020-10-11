import {
  removeAllChildren,
  loadChild
} from '/lib/utils.js';

export default function Login(app) {

  this.load = () => {
    fetch('components/signup/signup.html')
      .then(response => response.text())
      .then(html => loadChild(app.main, html))
      .then(node => {
        const form = node.querySelector('#form');
        form.addEventListener('submit', e => this.submitForm(e));
      });
  };

  this.submitForm = (e) => {
    e.preventDefault();

    const data = this.getFormData(e.target);
    const errors = this.validateFormData(data);
    this.displayErrors(e.target, errors);
    const isValid = errors.length === 0;

    if (!isValid) return;

    app.store.addUser(data);
    app.loadLogin();
  };

  this.getFormData = (form) => {
    return {
      firstName: form['first_name'].value,
      lastName: form['last_name'].value,
      email: form['email'].value,
      password: form['password'].value,
      agree: form['agree'].checked,
    };
  }

  this.validateFormData = (data) => {
    const errors = [];

    if (!data.firstName) {
      errors.push("First name is required.");
    }
    if (!data.lastName) {
      errors.push("Last name is required.");
    }
    if (!data.email) {
      errors.push('Email is required.');
    } else if (app.store.users.has(data.email)) {
      errors.push('User with the same email is already registered.');
    }
    if (!data.password) {
      errors.push('Password is required.');
    }
    if (!data.agree) {
      errors.push('Agreement is required.');
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