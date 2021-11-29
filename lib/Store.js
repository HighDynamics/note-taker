const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

class Store {
  constructor(filePath = '../db/db.json') {
    this.filePath = path.join(__dirname, filePath);
  }

  readData() {
    const data = JSON.parse(readFileSync(this.filePath));

    return data;
  }

  appendData(newData) {
    const currentData = this.readData();

    currentData.push(newData);

    writeFileSync(this.filePath, JSON.stringify(currentData, null, 2));

    return currentData;
  }

  deleteData(id) {
    const currentData = this.readData();

    const newData = currentData.filter((item) => item.id !== id);

    writeFileSync(this.filePath, JSON.stringify(newData, null, 2));

    return currentData;
  }
}

module.exports = Store;
