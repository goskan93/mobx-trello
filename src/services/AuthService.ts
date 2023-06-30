import { UserInput, AuthOutput } from '@goskan93/trello-clone-contracts';

class AuthService {
    url = `${process.env.REACT_APP_URI}/api/auth`;
    login = async (authData: UserInput): Promise<AuthOutput> => {
        return await fetch(`${this.url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authData)
        }).then(response => response.json());
    };
    signUp = async (authData: UserInput) => {
        return await fetch(`${this.url}/sign-up`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authData)
        })
            .then(response => response.text())
            .catch(e => console.log('server errror ', e));
    };
}

export default AuthService;
