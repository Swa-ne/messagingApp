import { useState } from 'react';
import './App.css';
import Login from './pages/login';
import Loading from './pages/loading';
import MainContent from './pages/mainContent';

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return <>{isLoading ? <Loading /> : <>{isLoggedIn ? <MainContent /> : <Login />}</>}</>;
}

export default App;
