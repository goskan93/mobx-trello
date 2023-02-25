import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-aria';
const DropIndicator = ({ beforeTaskId, cardId }) => {
    const ref = useRef(null);

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
            if (draggedTask.cardId === cardId) {
                console.log('moving inside card - not implemented', beforeTaskId);
            } else {
                // moving to ther card but place matters
                console.log(
                    'moving inside card nut place matters - not implemented',
                    beforeTaskId
                );
            }
        }
    });

    return (
        <li
            role='option'
            ref={ref}
            {...dropProps}
            className={`drop-indicator ${isDropTarget ? 'drop-target' : ''}`}
        />
    );
};

DropIndicator.propTypes = {
    beforeTaskId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    cardId: PropTypes.string
};

export default DropIndicator;
