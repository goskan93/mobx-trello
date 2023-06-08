import { rootStore } from 'store';

class CardsService {
    url = 'http://localhost:3004/api/cards';
    get = async () => {
        return fetch(this.url, {
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        }).then(response => response.json());
    };
    post = async card => {
        return await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${rootStore.authStore.token}`
            },
            body: JSON.stringify(card)
        }).then(response => response.text());
    };
    delete = async cardId => {
        return await fetch(`${this.url}/${cardId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        });
    };
}

export default CardsService;
