import { uuidv4 } from '/lib/utils.js';

export default function Store(storage) {

  this.users = new Map();

  this.addUser = (user) => {
    user = {
      ...user,
      id: uuidv4(),
    };
    this.users.set(user.email, user);
    this.save();
  }

  this.saveUser = (email, user) => {
    this.users.delete(email);
    this.users.set(user.email, user);
    this.save();
  }

  this.getUserById = (id) => {
    for (const user of this.users.values()) {
      if (user.id === id) {
        return user;
      }
    }
    return null;
  };

  this.save = () => storage.setItem('users', JSON.stringify(Array.from(this.users.values())));

  this.getTodoLists = (userId) => {
    try {
      const listsItem = storage.getItem('lists');
      const listsObject = JSON.parse(listsItem);
      const listsArray = Array.isArray(listsObject) ? listsObject : [];
      return listsArray.filter(x => x.userId === userId);
    } catch {
      return [];
    }
  };

  this.getTodoList = (userId, listId) => {
    try {
      const listsItem = storage.getItem('lists');
      const listsObject = JSON.parse(listsItem);
      const listsArray = Array.isArray(listsObject) ? listsObject : [];
      for (let list of listsArray) {
        if (list.userId === userId && list.id === listId) {
          return list;
        }
      }
      return null;
    } catch {
      return null;
    }
  };

  this.saveTodoList = (list) => {
    try {
      const listsItem = storage.getItem('lists');
      const listsObject = JSON.parse(listsItem);
      const listsArray = Array.isArray(listsObject) ? listsObject : [];
      const result = listsArray.filter(x => x.id !== list.id);
      result.push(list);
      storage.setItem('lists', JSON.stringify(result));
    } catch {
    }
  };

  try {
    const usersItem = storage.getItem('users');
    const usersObject = JSON.parse(usersItem);
    const usersArray = Array.isArray(usersObject) ? usersObject : [];
    for (let user of usersArray) {
      this.users.set(user.email, user);
    }
  } catch {
  }

}
