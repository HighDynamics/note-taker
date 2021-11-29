const { readFileSync, writeFileSync } = require('fs');
const path = require('path');

class Store {
  constructor(filePath = '../db/db.json') {
    this.filePath = path.join(__dirname, filePath);
  }

  appendData(newData) {
    const currentData = JSON.parse(readFileSync(this.filePath));

    currentData.push(newData);

    writeFileSync(this.filePath, JSON.stringify(currentData, null, 2));

    return this.filePath;
  }

  deleteData(id) {
    const currentData = JSON.parse(readFileSync(this.filePath));

    const newData = currentData.filter((item) => item.id !== id);

    writeFileSync(this.filePath, JSON.stringify(newData, null, 2));

    return currentData;
  }
}

module.exports = Store;
