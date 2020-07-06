//================================================================
//Firebase

import firebase from 'firebase/app';
import 'firebase/firebase';

const firestore = firebase.firestore();

firestore.collection('users').doc('wemPoadRl2JUzfSRABmw').collection('cartItems').doc('hKj7h6DCQg6WKU33VLaB')
firestore.doc('/users/wemPoadRl2JUzfSRABmw/cartItems/hKj7h6DCQg6WKU33VLaB');
firestore.collection('/users/wemPoadRl2JUzfSRABmw/cartItems')

//================================================================
//async await - 335

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const firstUser = users[0];
        console.log(frstUser);
        return fetch(
            'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
        );
    })
    .then(response => response.json())
    .then(posts => console.log(posts))
    .catch(error => console.log(error));
  
   //async await coded format top to below 

const myAsyncFunction = async () => {
    try {
        const usersReponse = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const users = await usersReponse.json();
        const secondUser = users[1];
     
        console.log(secondUser);
        
        const postsResponse = await fetch(
         'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
        );
        const posts = await postsResponse.json();
        
        console.log(posts);
    } catch (err) {
        console.log('there was an error');
    }
} 

