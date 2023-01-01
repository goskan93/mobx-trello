import { useStores } from 'store';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

const CreateTask = ({ cardId }) => {
    const [taskName, setTaskName] = useState('');
    const { tasksStore } = useStores();

    const onAdd = () => {
        tasksStore.add({ name: taskName, cardId });
        setTaskName('');
    };

    return (
        <>
            <input
                onChange={e => setTaskName(e.target.value)}
                value={taskName}
            />
            <button onClick={onAdd}>Add</button>
        </>
    );
};

CreateTask.propTypes = {
    cardId: PropTypes.string
};
export default observer(CreateTask);
