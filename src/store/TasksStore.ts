import { action, observable, makeObservable, runInAction, toJS } from 'mobx';
import TasksService from 'services/TasksService';

interface Task {
    id: string | number;
    name: string;
}

class TasksStore {
    tasks: Task[] = [];
    tasksService;

    constructor() {
        makeObservable(
            this,
            {
                tasks: observable,
                add: action,
                fetch: action,
                delete: action,
                update: action
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

    add = (task: Task) => {
        this.tasksService.post(task).then(addedTask =>
            runInAction((): any => {
                this.tasks.push(addedTask);
                console.log('task added', addedTask);
            })
        );
    };

    delete = (taskId: string): void => {
        this.tasksService.delete(taskId).then(
            runInAction((): any => {
                this.tasks = this.tasks.filter(task => task.id !== taskId);
                console.log('task deleted', taskId);
            })
        );
    };

    update = (task: Task) => {
        this.tasksService.patch(task).then(
            runInAction((): any => {
                const oldTask = this.tasks.find(t => t.id === task.id);
                const newTask = { ...toJS(oldTask), ...task };
                this.tasks = this.tasks.map(t =>
                    t.id === newTask.id ? newTask : t
                );
                console.log('task changed');
            })
        );
    };
}

export default TasksStore;
