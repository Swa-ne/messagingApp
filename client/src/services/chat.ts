import axios from "axios";
import { cookies } from "./entry";

const apiURL = import.meta.env.VITE_API_BASE_URL;
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
