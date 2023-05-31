'use client'

import styled from "styled-components";
import { Animal } from "@/types/animal";

export default function Animals({ animals }: { animals: Animal[] }) {
  return (
    <>
      {animals.map((animal, index) => (
        <Container key={index}>
          <div className="info">
            <h1>{animal.name}</h1>
            <h3>{animal.race}</h3>
            <h4>Age: {animal.age}</h4>
            <h2>Owner: {animal.owner.name}</h2>
            <h4>Telephone: {animal.owner.fone}</h4>
          </div>
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

  .info {
    padding: 8px;
  }
`