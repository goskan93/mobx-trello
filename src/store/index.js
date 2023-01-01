import TasksStore from 'store/TasksStore';
import CardsStore from 'store/CardsStore';
import { createContext, useContext } from 'react';

const stores = {
    tasksStore: new TasksStore(),
    cardsStore: new CardsStore()
};

const storeContext = createContext(stores);
export const useStores = () => useContext(storeContext);
