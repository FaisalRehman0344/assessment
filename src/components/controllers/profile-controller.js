import { loginController } from './login-controller';


export const ProfileController = {
    updateUser:(user) => {
        loginController.saveUserToDB(user);
        localStorage.setItem('user',JSON.stringify(user));
        localStorage.setItem('firstLogin','false');
    }
}