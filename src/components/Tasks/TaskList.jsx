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
                e.items.map(async item =>
                    JSON.parse(await item.getText('move-task'))
                )
            );
            const draggedTask = draggedTasks[0]; // supports only dragging one task
            if (draggedTask.cardId === cardId) {
                //dont know yet how to reorder inside list
            } else {
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
                maxHeight: '58vh',
                minHeight: '58vh',
                listStyleType: 'none',
                padding: 0,
                border: isDropTarget ? '1px dashed grey' : ''
            }}
        >
            {tasks.map(t => (
                <Task onDelete={onDelete} task={t} key={t.id} />
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
