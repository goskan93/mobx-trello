import { action, observable, makeObservable } from 'mobx';
import { nanoid } from 'nanoid';

class CardsStore {
    cards = [];
    constructor() {
        makeObservable(this, {
            cards: observable,
            add: action
        });
    }

    add = card => {
        this.cards.push({ id: nanoid(), ...card });
    };
}

export default CardsStore;
