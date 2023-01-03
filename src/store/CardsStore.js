import { action, observable, makeObservable } from 'mobx';
import { nanoid } from 'nanoid';

class CardsStore {
    cards = [];
    fetched = false;
    maxCardsCount = 5;
    constructor() {
        makeObservable(this, {
            cards: observable,
            add: action,
            maxCardsCount: false,
            fetched: false
        });
    }

    get = () => {
        if (this.fetched) {
            return this.cards;
        }
    };
    add = card => {
        this.cards.push({ id: nanoid(), ...card });
    };
}

export default CardsStore;
