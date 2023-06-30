import { rootStore } from 'store';
import { CardInput, CardOutput } from '@goskan93/trello-clone-contracts';

const url = (userId?: string): string =>
    `${process.env.REACT_APP_URI}/api/users/${userId}/cards`;

class CardsService {
    get = async (): Promise<CardOutput[]> => {
        return fetch(url(rootStore.userStore.user?.id), {
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        }).then(response => response.json());
    };
    post = async (card: CardInput) => {
        return await fetch(url(rootStore.userStore.user?.id), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${rootStore.authStore.token}`
            },
            body: JSON.stringify(card)
        }).then(response => response.text());
    };
    delete = async (cardId: string) => {
        return await fetch(`${url(rootStore.userStore.user?.id)}/${cardId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        });
    };
}

export default CardsService;
