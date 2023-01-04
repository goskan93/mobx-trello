import data from 'db/cardsDb.json';
import { sleep } from 'utils/helpers';

class CardsService {
    get = async () => {
        await sleep(500);
        return data.cards;
    };
}

export default CardsService;
