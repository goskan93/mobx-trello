import { useStores } from 'store';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

const CreateCard = () => {
    const [cardName, setCardName] = useState('');
    const { cardsStore } = useStores();

    const onAdd = () => {
        if (cardsStore.cards.length <= cardsStore.maxCardsCount) {
            cardsStore.add({ name: cardName });
            setCardName('');
        }
    };

    return (
        <>
            <input
                onChange={e => setCardName(e.target.value)}
                value={cardName}
            />
            <button onClick={onAdd}>Add</button>
        </>
    );
};

export default observer(CreateCard);
