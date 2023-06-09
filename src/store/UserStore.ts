import { observable, makeObservable, action } from 'mobx';
import UserService from 'services/UserService';

interface User {
    id: string;
    username: string;
}

class UserStore {
    userService;
    user?: User;
    constructor() {
        makeObservable(this, {
            user: observable,
            get: action
        });
        this.userService = new UserService();
    }

    async get() {
        const user = await this.userService.get();
        console.log({ user });
        this.user = user;
        return user;
    }
}

export default UserStore;
