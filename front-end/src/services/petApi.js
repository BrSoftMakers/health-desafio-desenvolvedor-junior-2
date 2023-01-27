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

async function get() {
    try {
        const response = await api.get("/pets", {
            headers: {
                authorization,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function patch(body, id) {
    try {
        const response = await api.patch(`/pets/${id}`, body, {
            headers: {
                authorization,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}

async function remove(id) {
    try {
        await api.delete(`/pets/${id}`, {
            headers: {
                authorization,
            },
        });
    } catch (error) {
        throw error;
    }
}

export const petApi = {
    post,
    get,
    patch,
    remove,
};
