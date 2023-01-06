import { useStores } from 'store';
import CreateTask from 'components/Tasks/CreateTask';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import TaskList from 'components/Tasks/TaskList';

const Card = ({ card }) => {
    const { tasksStore } = useStores();
    const { id, name } = card;
    const tasks = tasksStore.tasks.filter(t => t.cardId === id);
    return (
        <section
            style={{
                margin: '20px 20px 20px 0',
                padding: '10px',
                border: '1px solid',
                borderRadius: '4px'
            }}
        >
            <p>{name}</p>
            <CreateTask cardId={id} />
            <TaskList
                tasks={tasks}
                onDelete={taskId => tasksStore.delete(taskId)}
            />
        </section>
    );
};
Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })
};
export default observer(Card);
