import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import authenticationInitailization from '../firebase/firebase.inti';
authenticationInitailization();

const useFirebase = () => {
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    //Email Registration
    const userRegistration = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');

                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser(email, name, 'POST');
                updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL: 'https://example.com/jane-q-user/profile.jpg'
                })
                    .then(() => {})
                    .catch((error) => {});
                history.push('/');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    //Login With email

    const loginWithEmail = (email, password, history, location) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const destination = location?.state?.from || '/home';
                history.push(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, GoogleProvider);
        // .then((result) => {
        //     const user = result.user;
        //     setUser(user);
        // })
        // .catch((error) => {
        //     setLogingError(error.massage);
        // })
        // .finally(() => setIsLoading(false));
    };

    //Save user to the database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://spooky-beast-33270.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json)
            .then((data) => {});
    };
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => {
                setAuthError(error.massage);
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);

    //check admin
    useEffect(() => {
        fetch(
            `https://spooky-beast-33270.herokuapp.com/users_admin/${user.email}`
        )
            .then((res) => res.json())
            .then((result) => setAdmin(result.admin));
    }, [user.email]);

    return {
        user,
        admin,
        isLoading,
        userRegistration,
        loginWithEmail,
        loginWithGoogle,
        setIsLoading,
        authError,
        logOut
    };
};
export default useFirebase;
