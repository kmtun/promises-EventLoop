const fetch = require('node-fetch');

function sayHello() {
  console.log('Hello');
}

function blockFor300ms() {
  for(let i = 0; i < 300; i++) {
    console.log(i);
  }
}

function display() {
  console.log('Fetch done');
}

//callback queue
setTimeout(sayHello, 0);

// microtask queue 
// but not really beacuse fetch is still consider as task queue
const futureData = fetch('https://www.google.com')
futureData.then(response => {
  display();
});

blockFor300ms();

console.log('Global console log first');