import { ActionButton } from '@adobe/react-spectrum';
import DeleteOutline from '@spectrum-icons/workflow/DeleteOutline';
import PropTypes from 'prop-types';
import { useDrag } from 'react-aria';
import { observer } from 'mobx-react-lite';

const Task = ({ task, onDelete }) => {
    const { dragProps } = useDrag({
        getItems: () => {
            return [
                {
                    task: JSON.stringify(task)
                }
            ];
        }
    });
    return (
        <li
            {...dragProps}
            style={{
                margin: '8px 4px',
                padding: '4px 12px',
                border: '1px solid',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}
        >
            <p>{task.name}</p>
            <ActionButton onPress={onDelete}>
                <DeleteOutline aria-label={'delete'} />
            </ActionButton>
        </li>
    );
};

Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string
    }),
    onDelete: PropTypes.func
};

export default observer(Task);
