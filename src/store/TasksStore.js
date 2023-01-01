import { action, observable, makeObservable } from 'mobx';
import { nanoid } from 'nanoid';

class TasksStore {
    tasks = [];

    constructor() {
        makeObservable(this, {
            tasks: observable,
            add: action
        });
    }
    add = task => this.tasks.push({ id: nanoid(), ...task });
}

export default TasksStore;
