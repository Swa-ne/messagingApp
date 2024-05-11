import { useEffect, useState } from 'react';
import './App.scss';
import Login from './pages/login';
import Loading from './pages/loading';
import MainContent from './pages/mainContent';
import { authenticateToken } from './services/entry';

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        authenticateToken()
            .then((isValid) => {
                setIsLoggedIn(isValid);
            })
            .catch((e) => console.log(e))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return <>{isLoading ? <Loading /> : <>{isLoggedIn ? <MainContent /> : <Login />}</>}</>;
}

export default App;
