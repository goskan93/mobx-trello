import { TextField, Button } from '@adobe/react-spectrum';
import { useStores } from 'store';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import TextFieldRef from '@react-types/textfield';

const Login = () => {
    const navigate = useNavigate();
    const { authStore, userStore } = useStores();
    const usernameInput = useRef<TextFieldRef.TextFieldRef>(null);
    const passwordInput = useRef<TextFieldRef.TextFieldRef>(null);

    const onSubmit = async e => {
        e.preventDefault();
        try {
            await authStore.login({
                username: usernameInput.current!.getInputElement()!.value,
                password: passwordInput.current!.getInputElement()!.value
            });
            const user = await userStore.get();
            navigate(`/user/${user.id}/dashboard`);
        } catch (e) {
            console.log('login error', e);
        }
    };

    if (!!userStore.user?.id && authStore.isAuthenticated) {
        navigate(`/user/${userStore.user?.id}/dashboard`);
    }
    return (
        <form className='login-form' onSubmit={onSubmit}>
            <TextField label='Username' id='username' ref={usernameInput} />
            <TextField
                label='Password'
                type='password'
                id='password'
                ref={passwordInput}
            />
            <Button variant='primary' type='submit'>
                Login
            </Button>
        </form>
    );
};

export default Login;
