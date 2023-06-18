import { useStores, clearStore } from 'store';
import { Link, defaultTheme, Provider } from '@adobe/react-spectrum';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Layout = ({ children }) => {
    const { authStore } = useStores();
    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
        clearStore();
    };
    return (
        <Provider theme={defaultTheme}>
            <main>
                <nav>
                    {authStore.isAuthenticated && (
                        <Link onPress={logout}>Log out</Link>
                    )}
                </nav>
                <section>{children}</section>
                <footer>
                    <p style={{ fontSize: '0.5rem' }}>
                        If you have any suggestions, please add an issue{' '}
                        <a
                            href='https://github.com/goskan93/mobx-trello/issues'
                            target='_blank'
                            rel='noreferrer'
                        >
                            here.
                        </a>{' '}
                    </p>
                </footer>
            </main>
        </Provider>
    );
};
Layout.propTypes = {
    children: PropTypes.node
};
export default Layout;
