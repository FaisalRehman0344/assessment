import { Button } from 'primereact/button';
import '../landing/landing.css';
import './header.css';
import logo from '../../../assets/images/logo.png'
import googleLogo from '../../../assets/images/google.png'
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginController } from '../../controllers/login-controller';

export const Header = (props) => {

    const navigate = useNavigate();

    async function login() {
        try {
            if (localStorage.getItem('isLogin')) {
                navigate('/profile');
            } else {
                let res = await loginController.loginWithGoogle();
                if (res) {
                    toast.success(res.exist ? 'Login Successful' : 'Welcome to system');
                    navigate('/profile')
                }
            }

        } catch (e) {
            toast.error(e);
        }
    }

    function logout() {
        loginController.logout();
        navigate('/');
    }

    return (
        <div className='header-container'>
            <header className="header">
                <img width={'50px'} src={logo} alt='' />

                <h1 style={!loginController.login ? {marginLeft:'17rem'} : {}} className="heading header__item">Profile Management</h1>

                {!loginController.login ? <Button outlined onClick={login} style={{ width: '28rem', gap: '1rem' }}>
                    <div className="img-container">
                        <img style={{ width: '100%', height: '100%' }} src={googleLogo} alt="" />
                    </div>
                    <span style={{ fontWeight: 'bold', fontSize: '13px', textAlign: 'left' }}>Sign in with Google</span>
                </Button> : <Button onClick={logout} label='Logout' style={{ fontSize: '14px' }} outlined></Button>}
            </header>
            <Outlet />
        </div>
    );
}