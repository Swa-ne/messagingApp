import { useEffect, useState } from 'react';
import './App.scss';
import Login from './pages/login';
import Loading from './pages/loading';
import MainContent from './pages/mainContent';
import { authenticateToken, cookies } from './services/entry';
import { io, Socket } from 'socket.io-client';

const apiURL = import.meta.env.VITE_API_BASE_URL;

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        authenticateToken()
            .then((isValid) => {
                setIsLoggedIn(isValid);
                if (isValid) {
                    const newSocket = io(apiURL, {
                        query: {
                            userId: cookies.get("userId")
                        },
                    });
                    setSocket(newSocket)
                }
            })
            .catch((e) => console.error(e))
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return <>{isLoading ? <Loading /> : <>{isLoggedIn ? <MainContent socket={socket} /> : <Login />}</>}</>;
}

export default App;
