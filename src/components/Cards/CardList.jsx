import { useStores } from 'store';
import Card from 'components/Cards/Card';
import { observer } from 'mobx-react-lite';

const CardList = () => {
    const { cardsStore } = useStores();

    return (
        <div className={'board'}>
            {cardsStore.cards.map(card => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    );
};

export default observer(CardList);
