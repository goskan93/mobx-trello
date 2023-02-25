import { observable, makeObservable, flow, flowResult } from 'mobx';
import CardsService from 'services/CardsService';

class CardsStore {
    cardsService;
    cards = [];
    maxCardsCount = 5;
    constructor() {
        makeObservable(this, {
            cards: observable,
            add: flow,
            maxCardsCount: false,
            fetch: flow,
            delete: flow
        });
        this.cardsService = new CardsService();

        flowResult(this.fetch());
    }

    *fetch() {
        this.cards = yield this.cardsService.get();
    }

    *add(card) {
        yield this.cardsService.post(card).then(addedCard => {
            this.cards.push(addedCard);
        });
    }

    *delete(cardId) {
        yield this.cardsService.delete(cardId).then(() => {
            this.cards = this.cards.filter(c => c.id !== cardId);
        });
    }
}

export default CardsStore;
