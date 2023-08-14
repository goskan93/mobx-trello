import { rootStore } from 'store';
import axios from 'axiosConfig';

const url = userId => `/api/users/${userId}/tasks`;

class TasksService {
    get = () =>
        axios
            .get(url(rootStore.userStore.user.id))
            .then(response => response.data);

    post = task =>
        axios
            .post(url(rootStore.userStore.user.id), task)
            .then(response => response.data);

    delete = taskId =>
        axios.delete(`${url(rootStore.userStore.user.id)}/${taskId}`);

    patch = async task =>
        axios
            .patch(`${url(rootStore.userStore.user.id)}/${task.id}`, task)
            .then(response => response.data);
    move = async moveContext =>
        axios.patch(`${url(rootStore.userStore.user.id)}/move`, moveContext);
}

export default TasksService;
