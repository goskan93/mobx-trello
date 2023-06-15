import 'reset.css';
import 'Layout.css';
import { observer } from 'mobx-react-lite';
import Layout from 'components/Layout';
import Dashboard from 'views/Dashboard';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from 'views/Login';
import SignUp from 'views/SignUp';
import Protected from 'views/ProtectedRoute';
import Index from 'views/Index';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Index />
    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: 'user/:userId/dashboard',
        Component: () => (
            <Protected>
                <Dashboard />
            </Protected>
        )
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
