const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Resolved');
    reject('Error!')
  }, 1500)
});

console.log('before');

promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Resolved!');
    }, 1500)
  });
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('Oops: ', error);
});

console.log('after');