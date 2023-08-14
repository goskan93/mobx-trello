import axios from 'axiosConfig';
import { UserInput, AuthOutput } from '@goskan93/trello-clone-contracts';

class AuthService {
    url = `/api/auth`;
    login = (authData: UserInput) =>
        axios
            .post(this.url + '/login', authData)
            .then(response => response.data);
    signUp = (authData: UserInput): Promise<AuthOutput> =>
        axios
            .post(this.url + '/sign-up', authData)
            .then(response => response.data)
            .catch(e => console.log('server errror ', e));
}

export default AuthService;
