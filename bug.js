const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling is missing here.  The response is never sent if an error occurs.
    console.error(err);
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong'));
    }
  });
}