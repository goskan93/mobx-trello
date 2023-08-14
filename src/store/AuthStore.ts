import { makeObservable, action, observable, computed } from 'mobx';
import AuthService from 'services/AuthService';
import { makePersistable } from 'mobx-persist-store';
import { IDisposable } from 'store';

interface AuthData {
    username: string;
    password: string;
}

class AuthStore implements IDisposable {
    authService: AuthService;
    token?: string;

    constructor() {
        makeObservable(this, {
            login: action,
            signUp: action,
            token: observable,
            isAuthenticated: computed,
            reset: action
        });
        this.authService = new AuthService();
        makePersistable(this, {
            name: 'AuthStore',
            properties: ['token'],
            storage: window.localStorage // todo: use localForage
        });
    }

    get isAuthenticated() {
        return !!this.token;
    }

    async login(authData: AuthData) {
        return this.authService.login(authData).then(authData => {
            this.token = authData.access_token;
        });
    }

    async signUp(authData: AuthData) {
        return await this.authService.signUp(authData);
    }

    reset() {
        this.token = undefined;
    }
}

export default AuthStore;
