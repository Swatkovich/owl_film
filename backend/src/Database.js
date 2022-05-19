const fs = require("fs");
const path = require("path");
const { nanoid } = require("nanoid");

const databasePath = path.resolve(__dirname, "database.json");

class Database {
  readFile() {
    return JSON.parse(fs.readFileSync(databasePath).toString());
  }

  writeFile(database) {
    fs.writeFileSync(databasePath, JSON.stringify(database));
  }

  addUser(user) {
    const database = this.readFile();

    const userId = nanoid();

    database.users[userId] = {
      ...user,
      id: userId,
    };

    this.writeFile(database);

    return userId;
  }

  getUser(userId) {
    const database = this.readFile();

    return database.users[userId];
  }

  getUsers() {
    const database = this.readFile();
    const users = [];
    for (let i = 2; i< Object.values(database.users).length; i++) {
      users.push(Object.values(database.users)[i])
    }
    return users;
  }

  addOrder(order) {
    const database = this.readFile();

    const orderId = nanoid();

    database.orders[orderId] = {
      ...order,
      id: orderId,
    };

    this.writeFile(database);

    return orderId;
  }

  getOrder(orderId) {
    const database = this.readFile();
    
    return database.orders[orderId];
  }

  updateOrderLink(body) {
    console.log(body)
    const database = this.readFile();
    const id = body.orderId;
    const link = body.link;
    console.log(id);
    console.log(link);
    // console.log(database.orders[id].status);
    database.orders[id].link = link;
    database.orders[id].status = true;
    this.writeFile(database);
  }

  getOrders() {
    const database = this.readFile();
    const orders = Object.values(database.orders)
    return orders;
  }

  getUserOrders(userId) {
    const database = this.readFile();

    const user = database.users[userId];

    return Object.values(database.orders).filter((order) => order.email === user.email);
  }

  getUserByLogin(userLogin) {
    const { users } = this.readFile();

    return Object.values(users).filter((user) => user.login === userLogin)[0];
  }

  getUserByEmail(userEmail) {
    const { users } = this.readFile();

    return Object.values(users).filter((user) => user.email === userEmail)[0];
  }

  getUserMessages(userId) {
    const database = this.readFile();

    return database.users[userId].messages;
  }

  addMessageToUser(avatar, message, userId) {
    const database = this.readFile();

    database.users[userId].messages.push({'avatar': avatar, 'message': message})

    // this.writeFile(database);

    this.writeFile(database);
  }
}

module.exports = Database;
