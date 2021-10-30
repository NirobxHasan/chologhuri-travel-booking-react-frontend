import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import authenticationInitailization from '../firebase/firebase.inti';
authenticationInitailization();

const useFirebase = () => {
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const [user, setUser] = useState({});
    const [loginError, setLogingError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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
                setLogingError(error.massage);
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
        loginWithGoogle,
        setIsLoading,
        logOut
    };
};
export default useFirebase;
