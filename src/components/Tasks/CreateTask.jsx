import { useStores } from 'store';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';
import { ActionButton, TextField, Flex } from '@adobe/react-spectrum';

const CreateTask = ({ cardId }) => {
    const [taskName, setTaskName] = useState('');
    const { tasksStore } = useStores();

    const onAdd = () => {
        tasksStore.add({ name: taskName, cardId });
        setTaskName('');
    };

    return (
        <Flex
            direction={'row'}
            alignItems={'end'}
            justifySelf={'center'}
            justifyContent={'space-around'}
            gap={'size-40'}
        >
            <TextField
                onChange={setTaskName}
                value={taskName}
                label='Add task'
                isRequired
            />
            <ActionButton onPress={onAdd} UNSAFE_style={{ minWidth: 'auto' }}>
                Add
            </ActionButton>
        </Flex>
    );
};

CreateTask.propTypes = {
    cardId: PropTypes.string
};
export default observer(CreateTask);
