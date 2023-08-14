import { rootStore } from 'store';
import axios from 'axiosConfig';
import {
    TaskInput,
    TaskOutput,
    MoveTask
} from '@goskan93/trello-clone-contracts';

class TasksService {
    url = userId => `/api/users/${userId}/tasks`;
    get = (): Promise<TaskOutput[]> =>
        axios
            .get(this.url(rootStore.userStore.user?.id))
            .then(response => response.data);

    post = (task: TaskInput) =>
        axios
            .post(this.url(rootStore.userStore.user?.id), task)
            .then(response => response.data);

    delete = taskId =>
        axios.delete(`${this.url(rootStore.userStore.user?.id)}/${taskId}`);

    patch = task =>
        axios
            .patch(`${this.url(rootStore.userStore.user?.id)}/${task.id}`, task)
            .then(response => response.data);
    move = (moveContext: MoveTask) =>
        axios.patch(
            `${this.url(rootStore.userStore.user?.id)}/move`,
            moveContext
        );
}

export default TasksService;
