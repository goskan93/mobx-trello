import { TextField, Button } from '@adobe/react-spectrum';
import { useStores } from 'store';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { authStore } = useStores();

    const onSubmit = e => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('gothere');
        authStore
            .login({
                username,
                password
            })
            .then(() => {
                navigate('/dashboard');
            })
            .catch(e => {
                console.log('login error', e);
            });
    };

    return (
        <form className='login-form' onSubmit={onSubmit}>
            <TextField label='Username' id='username' />
            <TextField label='Password' type='password' id='password' />
            <Button variant='primary' type='submit'>
                Login
            </Button>
        </form>
    );
};

export default Login;
