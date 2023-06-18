import { useStores } from 'store';
import Card from 'components/Cards/Card';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';

const CardList = () => {
    const { cardsStore, uiStore } = useStores();

    return (
        <section aria-label={'board'} className='board'>
            <ul
                aria-label={'card list'}
                className={clsx(
                    'card-list',
                    uiStore.isMobile && 'card-list-mobile'
                )}
            >
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
