import { observable, makeObservable, action } from 'mobx';
import UserService from 'services/UserService';
import { makePersistable } from 'mobx-persist-store';
import { IDisposable } from 'store';

interface User {
    id: string;
    username: string;
}

class UserStore implements IDisposable {
    userService: UserService;
    user?: User;
    constructor() {
        makeObservable(this, {
            user: observable,
            get: action,
            reset: action
        });
        this.userService = new UserService();
        makePersistable(this, {
            name: 'UserStore',
            properties: ['user'],
            storage: window.localStorage // todo: use localForage
        });
    }

    async get() {
        const user = await this.userService.get();
        this.user = user;
        return user;
    }

    reset() {
        this.user = undefined;
    }
}

export default UserStore;
