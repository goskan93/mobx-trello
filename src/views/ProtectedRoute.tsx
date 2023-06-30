import { Navigate } from 'react-router-dom';
import { useStores } from 'store';
import { observer } from 'mobx-react-lite';

const Protected = ({ children }: { children: JSX.Element }) => {
    const { authStore, userStore } = useStores();

    if (!authStore.token && !userStore.user?.id) {
        return <Navigate to='/login' replace />;
    }
    return children;
};

export default observer(Protected);
