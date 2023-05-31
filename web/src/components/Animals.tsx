'use client'

import { useState, useContext } from "react";
import { Data } from "../context/Context";
import styled from "styled-components";
import { Animal } from "@/types/animal";
import { BrushIcon, XIcon } from 'lucide-react';
import { api } from "@/lib/api";

export default function Animals({ animals }: 
  { animals: Animal[] }) {
  const [editAnimalId, setEditAnimalId] = useState<number | null>(null);
  const [animalAge, setAnimalAge] = useState(0);
  const [fone, setFone] = useState("");
  const { control, setControl } = useContext(Data);

  async function editInfo(id: number) {
    const body = {
      animalAge,
      fone
    };

    try {
      await api.put(`/animals/${id}/update`, body);
      alert("Record successfully updated!");
      setControl(control + 1);
      setEditAnimalId(null);
    } catch (error) {
      console.log(error);
      alert("Record update failed!");
    }
  }

  async function remove(id: number) {
    const confirmed = window.confirm("Are you sure you want to remove this record?");

    if (confirmed) {
    try {
      await api.delete(`/animals/${id}/remove`);
      alert("Record successfully removed!");
      setControl(control + 1);
      setEditAnimalId(null);
    } catch (error) {
      console.log(error);
      alert("Record removal failed!");
    }
  }
  }

  return (
    <>
      {animals.map((animal, index) => (
        <Container key={index}>
          {
            editAnimalId === animal.id ? 
            "" 
            :
            <div className="info">
              <h1>{animal.name}</h1>
              <h3>{animal.race}</h3>
              <h4>Age: {animal.age}</h4>
              <h2>Owner: {animal.owner.name}</h2>
              <h4>Phone: {animal.owner.fone}</h4>
            </div>
          }
          {editAnimalId === animal.id ? (
            <FormContainer>
              <div className="input-container">
                <input
                  type="number"
                  value={animalAge}
                  onChange={(e) => setAnimalAge(Number(e.target.value))}
                  className="input-field"
                  placeholder=" "
                  id="age"
                />
                <label htmlFor="age" className="input-label">
                  Age
                </label>
              </div>
              <div className="input-container">
                <input
                  type="text"
                  value={fone}
                  onChange={(e) => setFone(e.target.value)}
                  className="input-field"
                  placeholder=" "
                  id="Phone"
                />
                <label htmlFor="Phone" className="input-label">
                  Phone
                </label>
              </div>
              <div className="buttons">
                <button className="save" onClick={() => editInfo(animal.id)}>SAVE</button>
                <button className="cancel" onClick={() => setEditAnimalId(null)}>CANCEL</button>
              </div>
            </FormContainer>
          ) : (
            <div className="edit">
              <BrushIcon
                cursor={"pointer"}
                width={40}
                onClick={() => setEditAnimalId(animal.id)}
              />
              <XIcon
                cursor={"pointer"}
                width={40}
                color="crimson"
                onClick={() => remove(animal.id)}
              />
            </div>
          )}
        </Container>
      ))}
    </>
  );
}

const Container = styled.div`
  width: 96%;
  min-height: 300px;
  background-color: #FFF;
  border: solid 4px brown;
  margin-bottom: 12px;
  position: relative;

  .info {
    padding: 8px;
  }

  .edit {
    width: 100px;
    position: absolute;
    right: 10px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin-top: 8px;
  height: 80%;
  padding: 20px;

  .input-container {
    position: relative;
    width: 100px;
  }

  .input-label {
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
    color: gray;
    pointer-events: none;
    transition: all 0.2s ease-in-out;
  }

  .input-field {
    padding: 8px;
    border: 1px solid gray;
    border-radius: 4px;
  }

  .input-field:focus + .input-label,
  .input-field:not(:placeholder-shown) + .input-label {
    top: 4px;
    font-size: 12px;
    color: black;
    background-color: white;
    padding: 0 4px;
  }

  .buttons {
    display: flex;

    .save {
      background-color: #2ecc71;
    }

    .cancel {
      background-color: crimson;
    }
  }
  
  button {
    width: 70px;
    height: 30px;
    margin-right: 12px;
    color: #fff;
    font-weight: bolder;

    &:hover {
      cursor: pointer;
    }
  }
`;