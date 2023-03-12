class TasksService {
    url = 'http://localhost:3004/api/tasks';

    get = async () => {
        return await fetch(this.url).then(response => response.json());
    };

    post = async task => {
        return await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(response => response.json());
    };

    delete = async taskId => {
        return await fetch(`${this.url}/${taskId}`, {
            method: 'DELETE'
        });
    };

    patch = async task => {
        return await fetch(`${this.url}/${task.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(response => response.json());
    };

    move = async moveContext => {
        return await fetch(`${this.url}/move`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(moveContext)
        });
    };
}

export default TasksService;
