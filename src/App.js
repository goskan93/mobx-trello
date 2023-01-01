import './App.css';
import CreateCard from 'CreateCard';
import { useStores } from 'store';
import Card from 'Card';
import { observer } from 'mobx-react-lite';

const App = () => {
    const { cardsStore } = useStores();

    return (
        <div>
            <CreateCard />
            {cardsStore.cards.map(card => (
                <Card key={card.id} id={card.id} name={card.name} />
            ))}
        </div>
    );
};

export default observer(App);
