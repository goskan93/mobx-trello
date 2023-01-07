import { useStores } from 'store';
import Card from 'components/Cards/Card';
import { observer } from 'mobx-react-lite';

const CardList = () => {
    const { cardsStore } = useStores();

    return (
        <section aria-label={'board'}>
            <ul aria-label={'card list'} className={'board'} style={{}}>
                {cardsStore.cards.map(card => (
                    <Card
                        key={card.id}
                        card={card}
                        onDelete={() => cardsStore.delete(card.id)}
                    />
                ))}
            </ul>
        </section>
    );
};

export default observer(CardList);
