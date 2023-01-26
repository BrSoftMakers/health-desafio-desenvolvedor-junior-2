import api from "./api";

const authorization = import.meta.env.VITE_API_AUTHORIZATION;

async function createOrUpdateOwner(body) {
    try {
        const response = await api.post("/owners", body, {
            headers: {
                authorization,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

export const ownerApi = {
    createOrUpdateOwner,
};
