import { useStores } from 'store';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Flex, TextField, ActionButton } from '@adobe/react-spectrum';

const CreateCard = () => {
    const [cardName, setCardName] = useState('');
    const { cardsStore } = useStores();

    const onAdd = () => {
        if (cardsStore.cards.length < cardsStore.maxCardsCount) {
            cardsStore.add({ name: cardName });
            setCardName('');
        }
    };

    return (
        <Flex direction={'row'} alignItems={'end'} gap={'size-125'}>
            <TextField
                onChange={setCardName}
                value={cardName}
                label='Add new card'
                isRequired
            />
            <ActionButton onPress={onAdd}>Add</ActionButton>
        </Flex>
    );
};

export default observer(CreateCard);
