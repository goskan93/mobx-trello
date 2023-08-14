import axios from 'axiosConfig';

class UserService {
    get = () => axios.get(`/api/users`).then(response => response.data);
}

export default UserService;
