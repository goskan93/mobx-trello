import { useStores } from 'store';
import Card from 'components/Cards/Card';
import { observer } from 'mobx-react-lite';

const CardList = () => {
    const { cardsStore } = useStores();

    return (
        <section aria-label={'board'} className={'board'}>
            {cardsStore.cards.map(card => (
                <Card key={card.id} card={card} />
            ))}
        </section>
    );
};

export default observer(CardList);
