import { observable, makeObservable, flow, runInAction, action } from 'mobx';
import CardsService from 'services/CardsService';

interface Card {
    id: string;
    name: string;
}

class CardsStore {
    cardsService;
    cards: Card[] = [];
    constructor() {
        makeObservable(this, {
            cards: observable,
            add: flow,
            fetch: action,
            delete: flow,
            setToken: false
        });
        this.cardsService = new CardsService();
    }

    setToken(token) {
        this.cardsService.setToken(token);
    }

    fetch() {
        runInAction(async () => {
            this.cards = await this.cardsService.get();
        });
    }

    *add(card: Card) {
        yield this.cardsService.post(card).then(addedCardId => {
            this.cards.push({ ...card, id: addedCardId });
        });
    }

    *delete(cardId: string) {
        yield this.cardsService.delete(cardId).then(() => {
            this.cards = this.cards.filter(c => c.id !== cardId);
        });
    }
}

export default CardsStore;
