import 'Layout.css';
import { useStores } from 'store';
import CreateCard from 'components/Cards/CreateCard';
import { observer } from 'mobx-react-lite';
import CardList from 'components/Cards/CardList';
import { useEffect } from 'react';

const Dashboard = () => {
    const { tasksStore, cardsStore } = useStores();

    useEffect(() => {
        tasksStore.fetch();
        cardsStore.fetch();
    }, []);

    return (
        <div className='dashboard'>
            <CreateCard />
            <CardList />
        </div>
    );
};

export default observer(Dashboard);
