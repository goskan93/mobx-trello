import { action, observable, makeObservable, runInAction, toJS } from 'mobx';
import TasksService from 'services/TasksService';
import { IDisposable } from 'store';

interface Task {
    id: string;
    name: string;
    cardId: string;
}

interface MoveTask {
    fromCardId: string;
    toCardId: string;
    taskId: string;
    index: number;
}

class TasksStore implements IDisposable {
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
                update: action,
                move: action,
                reset: action
            },
            {
                name: 'tasks store'
            }
        );
        this.tasksService = new TasksService();
    }

    reset() {
        this.tasks = [];
    }

    fetch = () => {
        runInAction(async () => {
            const tasks = (await this.tasksService.get()).sort(
                (a, b) => a.index - b.index
            );
            this.tasks = tasks;
        });
    };

    add = (task: Task) => {
        this.tasksService.post(task).then(newTask =>
            runInAction((): any => {
                this.tasks.push(newTask);
            })
        );
    };

    delete = (taskId: string): void => {
        this.tasksService.delete(taskId).then(
            runInAction((): any => {
                this.tasks = this.tasks.filter(task => task.id !== taskId);
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
            })
        );
    };

    move = (moveContext: MoveTask) => {
        this.tasksService.move(moveContext).then(() => this.fetch());
    };
}

export default TasksStore;
