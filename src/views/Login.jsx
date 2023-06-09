import { TextField, Button } from '@adobe/react-spectrum';
import { useStores } from 'store';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const { authStore, userStore } = useStores();

    const onSubmit = async e => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        try {
            await authStore.login({
                username,
                password
            });
            const user = await userStore.get();
            console.log({ user });
            navigate(`/user/${user.id}/dashboard`);
        } catch (e) {
            console.log('login error', e);
        }
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
