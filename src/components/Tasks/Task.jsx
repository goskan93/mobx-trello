import { ActionButton } from '@adobe/react-spectrum';
import DeleteOutline from '@spectrum-icons/workflow/DeleteOutline';
import PropTypes from 'prop-types';
import { useDrag } from 'react-aria';
import { observer } from 'mobx-react-lite';
import DropIndicator from 'components/DropIndicator';
const Task = ({ task, onDelete, cardId, onUpdateCard, dropIndex }) => {
    const { dragProps, isDragging } = useDrag({
        getItems: () => {
            return [
                {
                    'move-task': JSON.stringify(task)
                }
            ];
        },
        getAllowedDropOperations: () => ['move-task']
    });

    return (
        <>
            <DropIndicator
                cardId={cardId}
                index={Math.max(dropIndex, 0)}
                onUpdateCard={onUpdateCard}
            />
            <li
                {...dragProps}
                className={`task ${isDragging ? 'dragging' : ''}`}
            >
                <p style={{ margin: '0' }}>{task.name}</p>
                <ActionButton onPress={onDelete}>
                    <DeleteOutline aria-label={'delete'} />
                </ActionButton>
            </li>
        </>
    );
};

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    }),
    onDelete: PropTypes.func,
    cardId: PropTypes.string,
    onUpdateCard: PropTypes.func,
    dropIndex: PropTypes.number
};

export default observer(Task);
