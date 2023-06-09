const BASE_URL = 'http://localhost:8000/api';

const api = {
    async getAnimals() {
        const response = await fetch(`${BASE_URL}/animals`);
        const data = await response.json();
        return data;
    },

    async getAnimalById(id) {
        const response = await fetch(`${BASE_URL}/animals/${id}`);
        const data = await response.json();
        return data; 
    },

    async createAnimal(animal) {
        const response = await fetch(`${BASE_URL}/animals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(animal)
        });
        const data = await response.json();
        return data;
    },

    async updateAnimal(id, animal) {
        const response = await fetch(`${BASE_URL}/animals/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(animal)
        });
        const data = await response.json();
        return data;
    },
    async deleteAnimal(id) {
        const response = await fetch(`${BASE_URL}/animals/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        return data;
    },
}

export default api;