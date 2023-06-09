import { makeObservable, action, observable } from 'mobx';
import AuthService from 'services/AuthService';

interface AuthData {
    username: string;
    password: string;
}

class AuthStore {
    authService: AuthService;
    token!: string;

    constructor() {
        makeObservable(this, {
            login: action,
            signUp: action,
            token: observable
        });
        this.authService = new AuthService();
    }

    async login(authData: AuthData) {
        return this.authService.login(authData).then(authData => {
            this.token = authData.access_token;
        });
    }

    async signUp(authData: AuthData) {
        return await this.authService.signUp(authData);
    }
}

export default AuthStore;
