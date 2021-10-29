import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";



initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)


    // Provider
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // sign in with google
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // LogOut
    const logout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {

        }).finally(() => setIsLoading(false));
    }

    // for 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
    return {
        signInWithGoogle,
        user,
        logout,
        isLoading,
        setIsLoading,
    }
};

export default useFirebase;