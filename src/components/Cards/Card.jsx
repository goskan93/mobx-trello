import { useStores } from 'store';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import CreateTask from 'components/Tasks/CreateTask';
import TaskList from 'components/Tasks/TaskList';
import DeleteOutline from '@spectrum-icons/workflow/DeleteOutline';
import { ActionButton, Divider } from '@adobe/react-spectrum';
import clsx from 'clsx';

const Card = ({ card, onDelete }) => {
    const { tasksStore, uiStore } = useStores();
    const { id, name } = card;
    const tasks = tasksStore.tasks.filter(t => t.cardId === id);
    return (
        <li className={clsx('card', uiStore.isMobile && 'card-mobile')}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 0'
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
