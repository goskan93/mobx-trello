import 'Layout.css';
import CreateCard from 'components/Cards/CreateCard';
import { observer } from 'mobx-react-lite';
import CardList from 'components/Cards/CardList';
import Layout from 'components/Layout';
const App = () => {
    return (
        <Layout>
            <CreateCard />
            <CardList />
        </Layout>
    );
};

export default observer(App);
