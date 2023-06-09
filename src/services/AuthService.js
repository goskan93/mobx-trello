class AuthService {
    url = 'http://localhost:3004/api/auth';
    login = async authData => {
        return await fetch(`${this.url}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(authData)
        }).then(response => response.json());
    };
    signUp = async authData => {
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