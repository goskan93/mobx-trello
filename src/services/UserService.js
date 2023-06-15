import { rootStore } from 'store';

class UserService {
    url = `${process.env.REACT_APP_URI}/api/users`;
    get = async () => {
        return fetch(this.url, {
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        }).then(response => response.json());
    };
}

export default UserService;
