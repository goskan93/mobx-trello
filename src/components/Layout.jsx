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
            <div className='container'>
                <nav>
                    {authStore.isAuthenticated && (
                        <Link onPress={logout}>Log out</Link>
                    )}
                </nav>
                <main>{children}</main>
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
            </div>
        </Provider>
    );
};
Layout.propTypes = {
    children: PropTypes.node
};
export default Layout;
