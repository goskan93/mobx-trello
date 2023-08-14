import { rootStore } from 'store';
import axios from 'axiosConfig';
import { CardInput, CardOutput } from '@goskan93/trello-clone-contracts';

const url = userId => `/api/users/${userId}/cards`;

class CardsService {
    get = (): Promise<CardOutput[]> =>
        axios
            .get(url(rootStore.userStore.user?.id))
            .then(response => response.data);

    post = (card: CardInput): Promise<string> =>
        axios
            .post(url(rootStore.userStore.user?.id), card)
            .then(response => response.data);

    delete = (cardId: string) =>
        axios.delete(`${url(rootStore.userStore.user?.id)}/${cardId}`);
}

export default CardsService;
