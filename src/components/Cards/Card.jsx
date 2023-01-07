import { useStores } from 'store';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import CreateTask from 'components/Tasks/CreateTask';
import TaskList from 'components/Tasks/TaskList';
import DeleteOutline from '@spectrum-icons/workflow/DeleteOutline';
import { ActionButton, Divider } from '@adobe/react-spectrum';

const Card = ({ card, onDelete }) => {
    const { tasksStore } = useStores();
    const { id, name } = card;
    const tasks = tasksStore.tasks.filter(t => t.cardId === id);
    return (
        <li
            style={{
                margin: '16px',
                padding: '10px',
                border: '1px solid',
                borderRadius: '4px',
                boxShadow: `0px 0px 8px grey`
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <h3>{name}</h3>
                <ActionButton onPress={onDelete}>
                    <DeleteOutline aria-label={'delete'} />
                </ActionButton>
            </div>
            <Divider size='S' marginBottom={'size-100'} />
            <CreateTask cardId={id} />

            <TaskList
                cardId={id}
                tasks={tasks}
                onDelete={taskId => tasksStore.delete(taskId)}
                onUpdateCard={(id, cardId) => tasksStore.update({ id, cardId })}
            />
        </li>
    );
};
Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    }),
    onDelete: PropTypes.func
};
export default observer(Card);
