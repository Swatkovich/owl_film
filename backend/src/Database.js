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

  getUserOrders(userId) {
    const database = this.readFile();

    const user = database.users[userId];

    return Object.values(database.orders).filter((order) => order.email === user.email);
  }

  getUserByLogin(userLogin) {
    const { users } = this.readFile();

    return Object.values(users).filter((user) => user.login === userLogin)[0];
  }

  getUserMessages(userId) {
    const database = this.readFile();

    return database.users[userId].messages;
  }
}

module.exports = Database;
