import axios from "axios";

export const postAnimal = async (value : {}) => {
    const resp = await axios.post('http://localhost:2780/animal', value)

    return resp
}