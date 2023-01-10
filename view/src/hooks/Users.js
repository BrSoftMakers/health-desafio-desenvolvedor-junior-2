//IMPORTANDO O TOASTIFY QUE RETORNA FEEDEBACK EM TELA
import { toast } from "react-toastify";
//IMPORTANDO AXIOS PARA MANIPULAÇÃO DE DADOS
import axios from "axios";


export const getUsers = async ( setUsers ) => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };