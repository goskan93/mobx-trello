import TasksStore from 'store/TasksStore';
import CardsStore from 'store/CardsStore';
import UIStore from 'store/UIStore';
import AuthStore from 'store/AuthStore';

class RootStore {
    authStore: AuthStore;
    tasksStore: TasksStore;
    cardsStore: CardsStore;
    uiStore: UIStore;
    constructor() {
        this.authStore = new AuthStore(this);
        this.cardsStore = new CardsStore(this);
        this.tasksStore = new TasksStore(this);
        this.uiStore = new UIStore(this);
    }
}
export const rootStore = new RootStore();

const stores = {
    tasksStore: rootStore.tasksStore,
    cardsStore: rootStore.cardsStore,
    uiStore: rootStore.uiStore,
    authStore: rootStore.authStore
};

export const useStores = () => stores;
