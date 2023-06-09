import { rootStore } from 'store';

class UserService {
    url = 'http://localhost:3004/api/users';
    get = async () => {
        return fetch(this.url, {
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        }).then(response => response.json());
    };
}

export default UserService;
