import { initializeApp } from 'firebase/app';
import { useState, useEffect } from 'react';
import { getDatabase, onValue, ref, set, get, push, connectDatabaseEmulator } from 'firebase/database';
import { connectAuthEmulator, getAuth, GoogleAuthProvider, onIdTokenChanged, signInWithCredential, signInWithPopup, signOut } from 'firebase/auth';

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
const auth = getAuth(firebase);

export const setData = (path, value) => (
    set(ref(database, path), value)
);
  
export const pushData = (path, value) => (
    push(ref(database, path), value)
);

export const getData = async (path) => {
    const snap = await get(ref(database, path));
    if (snap.exists()) {
        return snap.val();
    } else {
        return null;
    }
};

export const useData = (path, transform) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const dbRef = ref(database, path);
        const devMode = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
        if (devMode) { console.log(`loading ${path}`); }
        return onValue(dbRef, (snapshot) => {
            const val = snapshot.val();
            if (devMode) { console.log(val); }
            setData(transform ? transform(val) : val);
            setLoading(false);
            setError(null);
        }, (error) => {
            setData(null);
            setLoading(false);
            setError(error);
        });
    }, [path, transform]);

    return [data, setData, loading];
};

export const signInWithGoogle = () => {
    signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));
export { firebaseSignOut as signOut };

export const useUserState = (setUserData) => {
    const [user, setUser] = useState();

    useEffect(() => {
        onIdTokenChanged(getAuth(firebase), setUser);
    }, []);

    useEffect(() => {
        if (user) {
        setData(`/users/${user.uid}/id`, user.uid);
        setData(`/users/${user.uid}/displayName`, user.displayName);
        }

    }, [user]);

    return [user];
};