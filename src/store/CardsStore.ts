import { observable, makeObservable, flow, runInAction, action } from 'mobx';
import CardsService from 'services/CardsService';
import { IDisposable } from 'store';

interface Card {
    id: string;
    name: string;
}

class CardsStore implements IDisposable {
    cardsService;
    cards: Card[] = [];
    constructor() {
        makeObservable(this, {
            cards: observable,
            add: flow,
            fetch: action,
            delete: flow,
            reset: action
        });
        this.cardsService = new CardsService();
    }

    reset() {
        this.cards = [];
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
