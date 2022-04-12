import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../firebase.init';

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {

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
    }

    return {handleGoogleSignIn, handleSignupForm}
}

export default useFirebase;