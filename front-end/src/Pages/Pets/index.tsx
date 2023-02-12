import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PetCard } from "../../components/PetCard/";
import api from "../../services/api";

export const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("").then((response) => {
      console.log(response.data);
      setPets(response.data);
    });
  }, []);

  return (
    <>
      <Header />
    </>
  );
};
