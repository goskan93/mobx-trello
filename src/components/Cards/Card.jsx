import { useStores } from 'store';
import CreateTask from 'components/Tasks/CreateTask';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react-lite';

const Card = ({ card }) => {
    const { tasksStore } = useStores();
    const { id, name } = card;
    const tasks = tasksStore.tasks.filter(t => t.cardId === id);
    return (
        <div
            style={{
                margin: '20px 20px 20px 0',
                padding: '10px',
                border: '1px solid',
                borderRadius: '4px'
            }}
        >
            <p>{name}</p>
            <CreateTask cardId={id} />

            <ul style={{ overflowY: 'auto', maxHeight: '58vh' }}>
                {tasks.map(t => (
                    <li key={t.id}>{t.name}</li>
                ))}
            </ul>
        </div>
    );
};
Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string
    })
};
export default observer(Card);
