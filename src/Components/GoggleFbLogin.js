import React, { useContext } from 'react';
import { UserContext } from '../App';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const GoggleFbLogin = () => {
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleFbSignIn = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                var token = result.credential.accessToken;
                const { displayName, email } = result.user;
                const signedInUser = { name: displayName, email: email };
                setloggedInUser(signedInUser);
                history.replace(from);
            }).catch(function (error) {
                console.log(error.message);
            });
    }


    const handleGoogleSignIn = () => {
        const fbprovider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(fbprovider).then(function (result) {
            var token = result.credential.accessToken;
            const { displayName, email } = result.user;
            const signedInUser = { name: displayName, email: email };
            setloggedInUser(signedInUser);
            history.replace(from);
        }).catch(function (error) {
            console.log(error.message);
        });
    };

    return (
        <div>
            <button onClick={handleGoogleSignIn} className="rounded-pill  btn-light">Continue with Goggle</button>
            <button onClick={handleFbSignIn} className="rounded-pill btn-primary">Continue with Facebook</button>
        </div>
    );
};

export default GoggleFbLogin;