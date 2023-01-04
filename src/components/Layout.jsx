import { defaultTheme, Provider } from '@adobe/react-spectrum';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <Provider theme={defaultTheme}>
            <header></header>
            <main>{children}</main>
        </Provider>
    );
};
Layout.propTypes = {
    children: PropTypes.node
};
export default Layout;
