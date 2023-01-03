import { action, observable, makeObservable, flow, flowResult } from 'mobx';
import { nanoid } from 'nanoid';
import CardsService from 'services/CardsService';

class CardsStore {
    cardsService;
    cards = [];
    maxCardsCount = 5;
    constructor() {
        makeObservable(this, {
            cards: observable,
            add: action,
            maxCardsCount: false,
            fetch: flow
        });
        this.cardsService = new CardsService();

        flowResult(this.fetch());
    }

    *fetch() {
        this.cards = yield this.cardsService.get();
    }

    add = card => {
        this.cards.push({ id: nanoid(), ...card });
    };
}

export default CardsStore;
