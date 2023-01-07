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
            if (draggedTask.cardId !== cardId) {
                console.log(
                    'moving between cards, place no matter, move to bottom'
                );
                onUpdateCard(draggedTask.id, cardId);
            }
        }
    });

    return (
        <ul
            tabIndex={0}
            role={'list'}
            ref={ref}
            {...dropProps}
            style={{
                overflowY: 'auto',
                maxHeight: '55vh',
                minHeight: '55vh',
                listStyleType: 'none',
                padding: isDropTarget ? '3px' : '4px',
                border: isDropTarget ? '1px dashed grey' : ''
            }}
        >
            {tasks.map(t => (
                <Task
                    onDelete={() => onDelete(t.id)}
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
