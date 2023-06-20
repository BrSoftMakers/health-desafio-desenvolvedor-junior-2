import axios from "axios";

export const updtAnimal = async (value) => {
    const resp = await axios.patch(`http://localhost:2780/animal/${value.id}`, value.cadAnimal);

    return resp
}

