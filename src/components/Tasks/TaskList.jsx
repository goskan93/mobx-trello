import { ActionButton } from '@adobe/react-spectrum';
import DeleteOutline from '@spectrum-icons/workflow/DeleteOutline';
import PropTypes from 'prop-types';
import { useDrag } from 'react-aria';

let { dragProps } = useDrag({
    getItems() {
        return [
            {
                'text/plain': 'hello world'
            }
        ];
    }
});
const TaskList = ({ tasks, onDelete }) => {
    return (
        <ul
            {...dragProps}
            style={{
                overflowY: 'auto',
                maxHeight: '58vh',
                listStyleType: 'none',
                padding: 0
            }}
        >
            {tasks.map(t => (
                <li
                    key={t.id}
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
                    <p>{t.name}</p>
                    <ActionButton onPress={() => onDelete(t.id)}>
                        <DeleteOutline aria-label={'delete'} />
                    </ActionButton>
                </li>
            ))}
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
            name: PropTypes.string
        })
    ),
    onDelete: PropTypes.func
};

export default TaskList;
