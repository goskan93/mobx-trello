import TasksStore from 'store/TasksStore';
import CardsStore from 'store/CardsStore';

const stores = {
    tasksStore: new TasksStore(),
    cardsStore: new CardsStore()
};

export const useStores = () => stores;
