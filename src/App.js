import 'reset.css';
import 'Layout.css';
import { observer } from 'mobx-react-lite';
import Layout from 'components/Layout';
import Dashboard from 'views/Dashboard';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from 'views/Login';
import SignUp from 'views/SignUp';
import Protected from 'views/ProtectedRoute';
import Index from 'views/Index';

const router = [
    {
        path: '/',
        Component: Index
    },
    {
        path: '/sign-in',
        Component: SignUp
    },
    {
        path: '/login',
        Component: Login
    },
    {
        path: 'user/:userId/dashboard',
        Component: () => (
            <Protected>
                <Dashboard />
            </Protected>
        )
    }
];

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {router.map(({ path, Component }, index) => (
                        <Route
                            key={index}
                            exact
                            path={path}
                            element={<Component />}
                        />
                    ))}
                    {/* <Route path="*" element={<NotFound/>}/> TODO */}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default observer(App);
