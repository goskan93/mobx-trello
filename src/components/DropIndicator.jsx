import { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-aria';
const DropIndicator = ({ index, cardId, onUpdateCard }) => {
    const ref = useRef(null);

    let { dropProps, isDropTarget } = useDrop({
        ref,
        _onDrop: async e => {
            const draggedTasks = await Promise.all(
                e.items
                    .filter(item => item.types.has('move-task'))
                    .map(async item =>
                        JSON.parse(await item.getText('move-task'))
                    )
            );
            const draggedTask = draggedTasks[0]; // supports only dragging one task
            onUpdateCard(draggedTask.id, draggedTask.cardId, cardId, index);
            console.log(
                'moving task',
                draggedTask.id,
                draggedTask.cardId,
                cardId,
                index
            );
        },
        get onDrop() {
            return this._onDrop;
        },
        set onDrop(value) {
            this._onDrop = value;
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
    index: PropTypes.number,
    cardId: PropTypes.string,
    onUpdateCard: PropTypes.func
};

export default DropIndicator;
