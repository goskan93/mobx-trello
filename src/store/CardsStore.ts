import { observable, makeObservable, flow, flowResult } from 'mobx';
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
            fetch: flow,
            delete: flow
        });
        this.cardsService = new CardsService();

        flowResult(this.fetch());
    }

    *fetch() {
        console.log('invode card fetch');
        this.cards = yield this.cardsService.get();
    }

    *add(card: Card) {
        yield this.cardsService.post(card).then(addedCardId => {
            console.log({ addedCardId });
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
