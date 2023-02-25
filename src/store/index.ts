import TasksStore from 'store/TasksStore';
import CardsStore from 'store/CardsStore';
import UIStore from 'store/UIStore';
const stores = {
    tasksStore: new TasksStore(),
    cardsStore: new CardsStore(),
    uiStore: new UIStore()
};

export const useStores = () => stores;
