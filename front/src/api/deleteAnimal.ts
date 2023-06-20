import axios from "axios";

export const delAnimal = async (value: string) => {
    const resp = await axios.delete(`http://localhost:2780/animal/${value}`)

    return resp
}