export class BaseService {
    token;
    setToken = token => {
        this.token = token;
    };

    setTokenInService(token) {
        this.cardsService.setToken(token);
    }
}
