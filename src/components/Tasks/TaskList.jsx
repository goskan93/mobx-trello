import PropTypes from 'prop-types';
import Task from 'components/Tasks/Task';
import { useDrop } from 'react-aria';
import { useRef } from 'react';
import { observer } from 'mobx-react-lite';

const TaskList = ({ tasks, onDelete, cardId, onUpdateCard }) => {
    let ref = useRef();

    let { dropProps, isDropTarget } = useDrop({
        ref,
        onDrop: async e => {
            const draggedTasks = await Promise.all(
                e.items
                    .filter(item => item.types.has('move-task'))
                    .map(async item =>
                        JSON.parse(await item.getText('move-task'))
                    )
            );
            const draggedTask = draggedTasks[0]; // supports only dragging one task
            onUpdateCard(draggedTask.id, draggedTask.cardId, cardId, -1);
        }
    });

    return (
        <ul
            tabIndex={0}
            role={'list'}
            ref={ref}
            {...dropProps}
            className={'task-list'}
            style={{
                padding: isDropTarget ? '3px 0' : '4px 0',
                border: isDropTarget ? '1px dashed grey' : ''
            }}
        >
            {tasks.map((t, i) => (
                <Task
                    onDelete={() => onDelete(t.id)}
                    dropIndex={i}
                    task={t}
                    key={t.id}
                    cardId={cardId}
                    onUpdateCard={onUpdateCard}
                />
            ))}
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            name: PropTypes.string
        })
    ),
    onDelete: PropTypes.func,
    cardId: PropTypes.string,
    onUpdateCard: PropTypes.func
};

export default observer(TaskList);
