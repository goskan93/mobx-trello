import { useStores } from 'store';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TextField, ActionButton } from '@adobe/react-spectrum';

const CreateCard = () => {
    const [cardName, setCardName] = useState('');
    const { cardsStore } = useStores();

    const onAdd = () => {
        cardsStore.add({ name: cardName });
        setCardName('');
    };

    return (
        <section className={'create-card'}>
            <TextField
                onChange={setCardName}
                value={cardName}
                label='Add new card'
                isRequired
            />
            <ActionButton onPress={onAdd}>Add</ActionButton>
        </section>
    );
};

export default observer(CreateCard);
