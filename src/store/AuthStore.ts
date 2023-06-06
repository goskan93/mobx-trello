import { makeObservable, action, observable } from 'mobx';
import AuthService from 'services/AuthService';

interface AuthData {
    username: string;
    password: string;
}

class AuthStore {
    authService: AuthService;
    token!: string;
    rootStore;

    constructor(rootStore) {
        console.log('AuthStore ', rootStore);
        makeObservable(this, {
            login: action,
            signUp: action,
            token: observable
        });
        this.authService = new AuthService();
        this.rootStore = rootStore;
    }

    async login(authData: AuthData) {
        return this.authService.login(authData).then(authData => {
            this.token = authData.access_token;
            this.rootStore.cardsStore.setToken(this.token);
        });
    }

    async signUp(authData: AuthData) {
        return await this.authService.signUp(authData);
    }
}

export default AuthStore;
