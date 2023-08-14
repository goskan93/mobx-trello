import axios from 'axiosConfig';
import { UserOutput } from '@goskan93/trello-clone-contracts';

class UserService {
    get = (): Promise<UserOutput> =>
        axios.get(`/api/users`).then(response => response.data);
}

export default UserService;
