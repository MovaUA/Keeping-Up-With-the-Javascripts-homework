export default function Store() {

  this.users = new Map();

  this.addUser = (user) => {
    this.users.set(user.email, user);
    this.save();
  }

  this.save = () => window.localStorage.setItem('users', JSON.stringify(Array.from(this.users.values())));

  try {
    const usersItem = window.localStorage.getItem('users');
    const usersObject = JSON.parse(usersItem);
    const usersArray = Array.isArray(usersObject) ? usersObject : [];
    for (let user of usersArray) {
      this.addUser(user);
    }
  } catch {
  }

}
