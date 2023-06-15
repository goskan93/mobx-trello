import { Link } from 'react-router-dom';

const Index = () => {
    return (
        <div className='index-page'>
            <h1 style={{ fontSize: '1.5rem' }}>Tasks Manager</h1>
            <h6>Please enjoy my side project.</h6>
            <div className='index-actions'>
                <Link to={'login'}>Login</Link>
                <p> or </p>
                <Link to={'sign-up'}>Sign up</Link>
            </div>
        </div>
    );
};

export default Index;
