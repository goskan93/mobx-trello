import TasksStore from 'store/TasksStore';
import CardsStore from 'store/CardsStore';
import UIStore from 'store/UIStore';
import AuthStore from 'store/AuthStore';
import UserStore from './UserStore';

class RootStore {
    authStore: AuthStore;
    tasksStore: TasksStore;
    cardsStore: CardsStore;
    uiStore: UIStore;
    userStore: UserStore;
    constructor() {
        // moge przkazywać this w konstruktorze  i w kazdym storze miec dostęp do innego storu
        //https://mobx.js.org/defining-data-stores.html#combining-multiple-stores
        this.authStore = new AuthStore();
        this.cardsStore = new CardsStore();
        this.tasksStore = new TasksStore();
        this.uiStore = new UIStore();
        this.userStore = new UserStore();
    }
}
export const rootStore = new RootStore();

const stores = {
    tasksStore: rootStore.tasksStore,
    cardsStore: rootStore.cardsStore,
    uiStore: rootStore.uiStore,
    authStore: rootStore.authStore,
    userStore: rootStore.userStore
};

export const useStores = () => stores;
