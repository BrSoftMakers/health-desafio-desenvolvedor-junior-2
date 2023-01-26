import api from "./api";

const authorization = import.meta.env.VITE_API_AUTHORIZATION;

async function post(body) {
    try {
        const response = await api.post("/pets", body, {
            headers: {
                authorization,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const petApi = {
    post,
};
