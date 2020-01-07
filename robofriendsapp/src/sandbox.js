// Promises
import React from 'react';

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('stuff worked');
  } else {
    reject('stuff broke')
  }
})
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'Hi')
});
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, ' how have you been?')
});
const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, ' Is it me you\'re looking for?')
});

Promise.all([promise, promise2, promise3, promise4])
  .then((values) => {
    console.log(values);
  })

promise
  .then((result) => result + '!!!')
  .then(result2 => result2 + '?')
  .catch(() => console.log('error'))
  .then((result3) => {
    console.log(result3 + '!!');
  })

  // REAL WORLD EXAMPLE OF PROMISES

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]
Promise.all(urls.map(url =>
  return fetch(url).then(resp=> resp.json());
)).then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
}).catch(() => console.log('error'));




///////////////// ASYNC AWAIT //////////////
async function fetchUsers() {
   const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}


const urls = [
  'https://jsonplaceholder.typcode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
       fetch(url).then(resp=> resp.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch (e) {
    console.log('error')
    }
  }
