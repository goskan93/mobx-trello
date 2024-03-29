import { TextField, Button, Link } from '@adobe/react-spectrum';
import { useStores } from 'store';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
const SignUp = () => {
    const { authStore } = useStores();
    const navigate = useNavigate();
    const onSubmit = e => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const password2 = document.getElementById('repeat-password').value;

        // walidacja

        if (password === password2) {
            authStore
                .signUp({
                    username,
                    password
                })
                .then(() => {
                    navigate('/login');
                })
                .catch(e => {
                    console.log('sign up error', e);
                });
        }
        return false;
    };

    return (
        <form className='login-form' onSubmit={onSubmit}>
            <TextField label='Username' id='username' />
            <TextField label='Password' id='password' type='password' />
            <TextField
                label='Repeat Password'
                id='repeat-password'
                type='password'
            />
            <Button variant='primary' type='submit'>
                Sign Up
            </Button>
            <div style={{ textAlign: 'center' }}>
                <p>Please consider that it is just a side project.</p>
                <p>Do not use your personal data.</p>
                <p>
                    If you want to check how it works, go to{' '}
                    <Link>
                        <RouterLink to='/login'>login</RouterLink>
                    </Link>{' '}
                    page and use credentials: test test :)
                </p>
            </div>
        </form>
    );
};

export default SignUp;
