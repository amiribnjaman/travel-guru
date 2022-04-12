import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import auth from '../firebase.init';

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                // ...
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ...
            });
    }

    const handleSignupForm = e => {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                // ..
            });

    }

    const handleEmailBlur = email => {
        setEmail(email);
    }

    const handlePasswordBlur = email => {
        setPassword(email);
    }

    return { handleGoogleSignIn, handleSignupForm, handleEmailBlur, handlePasswordBlur }
}

export default useFirebase;