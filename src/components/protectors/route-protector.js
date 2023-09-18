import { Navigate } from 'react-router-dom';
import { loginController } from '../controllers/login-controller';

export const ProtectedRoute = ({ children }) => {
    const isLogin = loginController.login;

    if (!isLogin) {
        return <Navigate to="/" replace />;
    }

    return children;
};