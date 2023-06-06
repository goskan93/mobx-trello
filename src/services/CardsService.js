import { BaseService } from "./BaseService";

class CardsService extends BaseService {
    url = 'http://localhost:3004/api/cards';
    get = async () => {
        return fetch(this.url, {
            headers: {
                Authorization: `Bearer ${this.token}`
            }
        }).then(response => response.json());
    };
    post = async card => {
        return await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify(card)
        }).then(response => response.text());
    };
    delete = async cardId => {
        return await fetch(`${this.url}/${cardId}`, {
            method: 'DELETE'
        });
    };
}

export default CardsService;
