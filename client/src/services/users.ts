import axios from "axios";
import { cookies } from "./entry";

const apiURL = import.meta.env.VITE_API_BASE_URL;
export const getActiveUsers = async () => {
    const response = await axios
        .get(`${apiURL}/user/getActiveUsers`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response.message;
};

export const getInboxDetails = async (chatId: string) => {
    const response = await axios
        .get(`${apiURL}/chat/getInboxDetails`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
            params: {
                chatId
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response.message;
};