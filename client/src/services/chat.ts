import axios from "axios";
import { cookies } from "./entry";

const apiURL = import.meta.env.VITE_API_BASE_URL;
interface SaveMessageProps {
    message: string,
    chatId: string,
}
export const createInbox = async (userId2: string) => {
    const response = await axios
        .get(`${apiURL}/chat/create_private_inbox`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
            params: {
                userId2
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response.message;
};

export const saveMessage = async (data: SaveMessageProps) => {
    const response = await axios
        .post(
            `${apiURL}/chat/save_message`,
            { ...data },
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
    return response.message === 'success';
};


export const getMessage = async (chatId: string, page: string) => {
    const response = await axios
        .get(`${apiURL}/chat/get_messages`, {
            withCredentials: true,
            headers: {
                authorization: cookies.get('authorization'),
            },
            params: {
                chatId, page
            }
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error;
        });
    return response.message;
};
