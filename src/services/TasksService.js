import { rootStore } from 'store';
import axios from 'axiosConfig';

const url = userId => `/api/users/${userId}/tasks`;

class TasksService {
    get = () =>
        axios
            .get(url(rootStore.userStore.user.id))
            .then(response => response.data);

    post = async task =>
        axios
            .post(url(rootStore.userStore.user.id), task)
            .then(response => response.data);

    delete = async taskId => {
        return await fetch(`${url(rootStore.userStore.user.id)}/${taskId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        });
    };

    patch = async task => {
        return await fetch(`${url(rootStore.userStore.user.id)}/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${rootStore.authStore.token}`
            },
            body: JSON.stringify(task)
        }).then(response => response.json());
    };

    move = async moveContext => {
        return await fetch(`${url(rootStore.userStore.user.id)}/move`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${rootStore.authStore.token}`
            },
            body: JSON.stringify(moveContext)
        });
    };
}

export default TasksService;
