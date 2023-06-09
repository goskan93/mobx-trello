import 'reset.css';
import 'Layout.css';
import { observer } from 'mobx-react-lite';
import Layout from 'components/Layout';
import Dashboard from 'views/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from 'views/Login';
import SignUp from 'views/SignUp';

const router = createBrowserRouter([
    {
        path: '/',
        Component: () => (
            <div>
                <p>Test</p>
            </div>
        )
    },
    {
        path: '/signIn',
        element: <SignUp />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: 'user/:userId/dashboard',
        element: <Dashboard />
    }
]);

const App = () => {
    return (
        <Layout>
            <RouterProvider router={router} />
        </Layout>
    );
};

export default observer(App);
