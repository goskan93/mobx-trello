import { useStores } from 'store';
import CreateTask from 'CreateTask';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

const Card = ({ id, name }) => {
    const { tasksStore } = useStores();
    const tasks = tasksStore.tasks.filter(t => t.cardId === id);
    return (
        <div
            style={{ margin: '20px', padding: '10px', border: '1px solid 000' }}
        >
            <p>{name}</p>
            <ul>
                {tasks.map(t => (
                    <li key={t.id}>{t.name}</li>
                ))}
            </ul>
            <CreateTask cardId={id} />
        </div>
    );
};
Card.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string
};
export default observer(Card);
