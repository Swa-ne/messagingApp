import axios from 'axios';
import Cookies from 'universal-cookie';

const apiURL = import.meta.env.VITE_API_BASE_URL;
export const cookies = new Cookies();

interface LoginCredentials {
    emailAddress: string,
    password: string
}

export const login = async (data: LoginCredentials) => {
    const response = await axios
        .post(`${apiURL}/entry/login`, data)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};

export const signup = async (data: LoginCredentials) => {
    const response = await axios
        .post(`${apiURL}/entry/signup`, data)
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response;
};
export const logout = () => {
    cookies.remove('authorization');
    cookies.remove('userFullName');
    cookies.remove('userId');
};

export const authenticateToken = async () => {
    const response = await axios
        .post(
            `${apiURL}/entry/checkCurrentUser`,
            {},
            {
                withCredentials: true,
                headers: {
                    authorization: cookies.get('authorization'),
                },
            }
        )
        .then((response) => response.data)
        .catch((error) => {
            return error.message;
        });
    return response.message === 'valid';
};
