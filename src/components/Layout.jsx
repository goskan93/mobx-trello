import { defaultTheme, Provider } from '@adobe/react-spectrum';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <Provider theme={defaultTheme}>
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
        </Provider>
    );
};
Layout.propTypes = {
    children: PropTypes.node
};
export default Layout;
