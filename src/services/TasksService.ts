import { rootStore } from 'store';
import {
    TaskInput,
    TaskOutput,
    MoveTask
} from '@goskan93/trello-clone-contracts';

const url = userId => `${process.env.REACT_APP_URI}/api/users/${userId}/tasks`;

class TasksService {
    get = async (): Promise<TaskOutput> => {
        return await fetch(url(rootStore.userStore.user?.id), {
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        }).then(response => response.json());
    };

    post = async (task: TaskInput): Promise<TaskOutput> => {
        return await fetch(url(rootStore.userStore.user?.id), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${rootStore.authStore.token}`
            },
            body: JSON.stringify(task)
        }).then(response => response.json());
    };

    delete = async (taskId: string) => {
        return await fetch(`${url(rootStore.userStore.user?.id)}/${taskId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        });
    };

    patch = async task => {
        //not used
        return await fetch(`${url(rootStore.userStore.user?.id)}/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${rootStore.authStore.token}`
            },
            body: JSON.stringify(task)
        }).then(response => response.json());
    };

    move = async (moveContext: MoveTask) => {
        return await fetch(`${url(rootStore.userStore.user?.id)}/move`, {
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
