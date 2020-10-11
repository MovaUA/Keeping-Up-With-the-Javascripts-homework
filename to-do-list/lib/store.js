export default function Store(storage) {

  this.users = new Map();

  this.addUser = (user) => {
    this.users.set(user.email, user);
    this.save();
  }

  this.save = () => storage.setItem('users', JSON.stringify(Array.from(this.users.values())));

  this.getTodoList = (email) => {
    return [];
  };

  try {
    const usersItem = storage.getItem('users');
    const usersObject = JSON.parse(usersItem);
    const usersArray = Array.isArray(usersObject) ? usersObject : [];
    for (let user of usersArray) {
      this.addUser(user);
    }
  } catch {
  }

}
