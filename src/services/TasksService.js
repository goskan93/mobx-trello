class TasksService {
    get = async () => {
        return await fetch('http://localhost:3004/tasks').then(response =>
            response.json()
        );
    };
    post = async task => {
        return await fetch('http://localhost:3004/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(response => response.json());
    };
    delete = async taskId => {
        return await fetch(`http://localhost:3004/tasks/${taskId}`, {
            method: 'DELETE'
        }).then(response => response.json());
    };
}

export default TasksService;
