import { action, observable, makeObservable, runInAction } from 'mobx';
import { nanoid } from 'nanoid';
import data from 'db/tasksDb.json';
import { sleep } from 'helpers';

class TasksStore {
    tasks = [];

    constructor() {
        makeObservable(
            this,
            {
                tasks: observable,
                add: action,
                fetch: action
            },
            {
                name: 'tasks store'
            }
        );
        this.fetch();
    }

    fetch = async () => {
        await sleep(500);
        runInAction(() => (this.tasks = data.tasks));
    };
    add = task => this.tasks.push({ id: nanoid(), ...task });
}

export default TasksStore;
