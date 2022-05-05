import { initializeApp } from 'firebase/app';
import { useState, useEffect } from 'react';
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBOr98EUaom7a0I6qVE_w0o2NVl05A7tOc",
    authDomain: "data-by-daylight.firebaseapp.com",
    databaseURL: "https://data-by-daylight-default-rtdb.firebaseio.com",
    projectId: "data-by-daylight",
    storageBucket: "data-by-daylight.appspot.com",
    messagingSenderId: "634597468054",
    appId: "1:634597468054:web:560187ad1986f2edf29fb7",
    measurementId: "G-0VM9XV3YDD"
};

const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const setData = (path, value) => (
    set(ref(database, path), value)
);