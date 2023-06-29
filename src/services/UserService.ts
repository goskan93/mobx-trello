import { rootStore } from 'store';
import { UserOutput } from '@goskan93/trello-clone-contracts';

class UserService {
    url = `${process.env.REACT_APP_URI}/api/users`;
    get = async (): Promise<UserOutput> => {
        return fetch(this.url, {
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        }).then(response => response.json());
    };
}

export default UserService;
