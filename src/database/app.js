import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { Link, useHistory } from 'react-router-dom'




// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyA3bxwbQbEPsqgxs6_85PWgtN1saX1wzrY",
    authDomain: "up2data-aefb3.firebaseapp.com",
    databaseURL: "https://up2data-aefb3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "up2data-aefb3",
    storageBucket: "up2data-aefb3.appspot.com",
    messagingSenderId: "1046196695207",
    appId: "1:1046196695207:web:5792d14c23855db6d0eb82",
    measurementId: "G-CM46XE0972"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

const db = getDatabase();

async function authStatus() {
    const clientID = localStorage.getItem("clientID")
    const secretKey = localStorage.getItem("secretKey")
    return new Promise(function (resolve) {
        const starCountRef = ref(db, `clients/${clientID}`);
        onValue(starCountRef, (snapshot) => {
            const client = snapshot.val();
            if (client && client.secretKey == secretKey) {
                localStorage.setItem("userName", client.fullName);
                localStorage.setItem("userEmail", client.email);
                localStorage.setItem("userCompany", client.company);
                localStorage.setItem("userWebsite", client.website);
                resolve(true);
            } else {
                resolve(false);
            };
        });
    });
};



export default authStatus