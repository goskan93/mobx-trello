import { rootStore } from 'store';

const url = userId => `${process.env.REACT_APP_URI}/api/users/${userId}/tasks`;

class TasksService {
    get = async () => {
        return await fetch(url(rootStore.userStore.user.id), {
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        }).then(response => response.json());
    };

    post = async task => {
        return await fetch(url(rootStore.userStore.user.id), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${rootStore.authStore.token}`
            },
            body: JSON.stringify(task)
        }).then(response => response.json());
    };

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
