import axios from 'axiosConfig';

class AuthService {
    url = `/api/auth`;
    login = authData =>
        axios
            .post(this.url + '/login', authData)
            .then(response => response.data);
    signUp = authData =>
        axios
            .post(this.url + '/sign-up', authData)
            .then(response => response.data)
            .catch(e => console.log('server errror ', e));
}

export default AuthService;
