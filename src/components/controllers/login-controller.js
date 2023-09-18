import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { User } from "../models/User";
import { db } from '../../firebase';
import { Collections } from "../enums/collections";
import { doc, getDoc, setDoc } from "firebase/firestore";

export const loginController = {
    login: localStorage.getItem('isLogin'),

    loginWithGoogle: async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth();
            const result = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = new User(result.user);
            localStorage.setItem('isLogin', 'true');
            localStorage.setItem('token', token);
            localStorage.setItem('uid', user.uid);
            loginController.login = true;
            let snapshot = await loginController.userExists(user.uid);
            if (!snapshot.exists()) {
                await loginController.saveUserToDB(user);
                localStorage.setItem('firstLogin', 'true');
                localStorage.setItem('user', JSON.stringify(user));
                console.log(localStorage.getItem('user'));
                return { exist: false }
            } else {
                localStorage.setItem('firstLogin', 'false');
                localStorage.setItem('user',JSON.stringify(snapshot.data()));
                return { exist: true }
            }
        } catch (error) {
            throw error;
        }

    },

    userExists: async (uid) => {
        try {
            const userRef = doc(db, Collections.USER, uid);
            const docSnapshot = await getDoc(userRef);
            return docSnapshot;
        } catch (error) {
            throw error;
        }
    },

    saveUserToDB: async (user) => {
        try {
            const userRef = doc(db, Collections.USER, user.uid);
            setDoc(userRef, {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                uid: user.uid,
                gender:user.gender || '',
                age:user.age || 0
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    },


    getUserData: () => {
        let user = localStorage.getItem('user');
        return JSON.parse(user);
    },

    logout: () => {
        localStorage.clear();
        loginController.login = false;
    }
}