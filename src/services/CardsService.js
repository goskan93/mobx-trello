import { rootStore } from 'store';

const url = userId => `http://localhost:3004/api/users/${userId}/cards`;

class CardsService {
    get = async () => {
        return fetch(url(rootStore.userStore.user.id), {
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        }).then(response => response.json());
    };
    post = async card => {
        return await fetch(url(rootStore.userStore.user.id), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${rootStore.authStore.token}`
            },
            body: JSON.stringify(card)
        }).then(response => response.text());
    };
    delete = async cardId => {
        return await fetch(`${url(rootStore.userStore.user.id)}/${cardId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${rootStore.authStore.token}`
            }
        });
    };
}

export default CardsService;
