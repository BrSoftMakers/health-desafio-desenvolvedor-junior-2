'use client'

import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import { Container, Section } from "./style";
import Image from "next/image";
import background from "../../assets/background.jpg";
import { Animal } from "@/types/animal";
import Animals from "@/components/Animals";
import SearchBar from "@/components/SearchBar";

export default function ListingPage() {
  const [animals, setAnimals] = useState<Animal[]>([]);
  const [showAnimals, setShowAnimals] = useState<Animal[]>([]);

  const fetchAnimals = async () => {
    const response = await api.get('/animals');
    setAnimals(response.data);
    setShowAnimals(response.data);
  };

  const handleSearch = (searchQuery: string) => {
    const filteredAnimals = animals.filter(animal =>
      animal.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setShowAnimals(filteredAnimals);
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <Container>
      <h1>Registered Buddies</h1>
      <SearchBar onSearch={handleSearch} />
      {showAnimals.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <Section>
          <Animals animals={showAnimals} />
        </Section>
      )}
      <Image
        alt=""
        src={background}
        priority={false}
        objectFit="cover"
        fill
        quality={100}
      />
    </Container>
  );
}