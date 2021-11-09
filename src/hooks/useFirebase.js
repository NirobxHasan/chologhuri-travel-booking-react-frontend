import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
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

    //Email Registration
    const userRegistration = (name, email, password, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');

                const newUser = { email, displayName: name };
                setUser(newUser);

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

    return {
        user,
        isLoading,
        userRegistration,
        loginWithGoogle,
        setIsLoading,
        authError,
        logOut
    };
};
export default useFirebase;
