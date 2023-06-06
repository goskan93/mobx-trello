import TasksStore from 'store/TasksStore';
import CardsStore from 'store/CardsStore';
import UIStore from 'store/UIStore';
import AuthStore from 'store/AuthStore';

class RootStore {
    authStore;
    tasksStore;
    cardsStore;
    uiStore;
    constructor() {
        this.authStore = new AuthStore(this);
        this.cardsStore = new CardsStore(this);
        this.tasksStore = new TasksStore(this);
        this.uiStore = new UIStore(this);
    }
}
const store = new RootStore();

const stores = {
    tasksStore: store.tasksStore,
    cardsStore: store.cardsStore,
    uiStore: store.uiStore,
    authStore: store.authStore
};

export const useStores = () => stores;
