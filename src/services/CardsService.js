import { rootStore } from 'store';
import axios from 'axiosConfig';

const url = userId => `/api/users/${userId}/cards`;

class CardsService {
    get = () =>
        axios
            .get(url(rootStore.userStore.user.id))
            .then(response => response.data);

    post = card =>
        axios
            .post(url(rootStore.userStore.user.id), card)
            .then(response => response.data);

    delete = cardId =>
        axios.delete(`${url(rootStore.userStore.user.id)}/${cardId}`);
}

export default CardsService;
