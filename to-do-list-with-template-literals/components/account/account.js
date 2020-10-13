import {
  removeAllChildren,
  loadChild
} from '/lib/utils.js';

export default function AccountSettings(app) {

  this.load = () => {
    fetch('components/account/account.html')
      .then(response => response.text())
      .then(html => loadChild(app.main, html))
      .then(view => {
        const form = view.querySelector('#form');

        form['first_name'].value = app.user.firstName;
        form['last_name'].value = app.user.lastName;
        form['email'].value = app.user.email;
        form['password'].value = '';
        form['agree'].checked = app.user.agree;

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

    const user = {
      ...data,
      id: app.user.id,
    };
    app.store.saveUser(app.user.email, user);
    app.user = app.store.getUserById(app.user.id);
    app.loadHeader();
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
    } else if (data.email !== app.user.email && app.store.users.has(data.email)) {
      errors.push('User with the same email is already registered.');
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