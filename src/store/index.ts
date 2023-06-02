import TasksStore from 'store/TasksStore';
import CardsStore from 'store/CardsStore';
import UIStore from 'store/UIStore';
import AuthStore from 'store/AuthStore';
const stores = {
    tasksStore: new TasksStore(),
    cardsStore: new CardsStore(),
    uiStore: new UIStore(),
    authStore: new AuthStore()
};

export const useStores = () => stores;
