import AuthService from "./AuthService";
import CardsService from "./CardsService";

const services = {
    authService: new AuthService(),
    cardService: new CardsService()
}

export const allServices = [services.authService, services.cardService]