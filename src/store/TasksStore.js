import { action, observable, makeObservable, runInAction } from 'mobx';
import TasksService from 'services/TasksService';

class TasksStore {
    tasks = [];
    tasksService;

    constructor() {
        makeObservable(
            this,
            {
                tasks: observable,
                add: action,
                fetch: action,
                delete: action
            },
            {
                name: 'tasks store'
            }
        );
        this.tasksService = new TasksService();
        this.fetch();
    }

    fetch = () => {
        runInAction(
            async () => (this.tasks = await this.tasksService.get())
        ).then(() => console.log('tasks fetched'));
    };

    add = task => {
        this.tasksService.post(task).then(addedTask =>
            runInAction(() => {
                this.tasks.push(addedTask);
                console.log('task added', addedTask);
            })
        );
    };

    delete = taskId => {
        this.tasksService.delete(taskId).then(
            runInAction(() => {
                this.tasks = this.tasks.filter(task => task.id !== taskId);
                console.log('task deleted', taskId);
            })
        );
    };
}

export default TasksStore;
