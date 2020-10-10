import Store from '/store.js';

const app = {
  main: null,
  store: new Store(),
  landingPage: "",
  signupForm: "",
  loginForm: "",
  dashboard: "",
};

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

function DOMContentLoaded(e) {
  const main = document.getElementById('main');
  const landingPage = document.getElementById('landingPage');
  const signupForm = document.getElementById('signupForm');
  const loginForm = document.getElementById('loginForm');
  const dashboard = document.getElementById('dashboard');

  app.main = main;
  app.landingPage = landingPage.outerHTML;
  app.signupForm = signupForm.outerHTML;
  app.loginForm = loginForm.outerHTML;
  app.dashboard = dashboard.outerHTML;

  loadLandingPage();
}




function loadLandingPage() {
  removeAllChildren(app.main);

  const container = document.createElement('DIV');
  container.innerHTML = app.landingPage;
  app.main.appendChild(container);

  const signup = document.getElementById('signup');
  signup.addEventListener('click', loadSignupForm);

  const login = document.getElementById('login');
  login.addEventListener('click', loadLoginForm);
}

function removeAllChildren(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}




function loadSignupForm() {
  removeAllChildren(app.main);

  const container = document.createElement('DIV');
  container.innerHTML = app.signupForm;
  app.main.appendChild(container);

  const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', signupSubmit);
}

function signupSubmit(e) {
  e.preventDefault();

  const data = getSignupData(e.target);
  const errors = validateSignupData(data);
  updateErrorsList(errors);
  const isValid = errors.length === 0;

  if (!isValid) {
    return;
  }

  app.store.addUser(data);
  loadLoginForm();
}

function getSignupData(signupForm) {
  return {
    firstName: signupForm['first_name'].value,
    lastName: signupForm['last_name'].value,
    email: signupForm['email'].value,
    password: signupForm['password'].value,
    agree: signupForm['agree'].checked,
  };
}

function validateSignupData(data) {
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

function updateErrorsList(errorsArray) {
  const errors = document.getElementById('errors');
  removeAllChildren(errors);

  const addError = function (message) {
    const error = document.createElement('li');
    error.innerText = message;
    errors.appendChild(error);
  }

  for (let error of errorsArray) {
    addError(error);
  }
}




function loadLoginForm() {
  removeAllChildren(app.main);

  const container = document.createElement('DIV');
  container.innerHTML = app.loginForm;
  app.main.appendChild(container);

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', loginSubmit);
}

function loginSubmit(e) {
  e.preventDefault();

  const data = getLoginData(e.target);
  const errors = validateLoginData(data);
  updateErrorsList(errors);
  const isValid = errors.length === 0;

  if (!isValid) {
    return;
  }

  loadDashboard();
}

function getLoginData(loginForm) {
  return {
    email: loginForm['email'].value,
    password: loginForm['password'].value,
  };
}

function validateLoginData(data) {
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
  if (!user || data.password != user.password) {
    errors.push('Invalid email and/or password.');
  }

  return errors;
}




function loadDashboard() {
  removeAllChildren(app.main);

  const container = document.createElement('DIV');
  container.innerHTML = app.dashboard;
  app.main.appendChild(container);

}