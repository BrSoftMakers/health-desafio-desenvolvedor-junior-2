'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

import Image from "next/image";
import Link from 'next/link';
import { Container } from './style';

import background from "../../assets/background.jpg";
import { api } from '@/lib/api';

export default function RegisterPage() {
  const [ownerName, setOwnerName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [animalName, setAnimalName] = useState('');
  const [animalAge, setAnimalAge] = useState('');
  const [type, setType] = useState('');
  const [race, setRace] = useState('');

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = {
      ownerName,
      fone: telephone,
      animalName,
      animalAge: Number(animalAge),
      type,
      race
    }
    try {
      await api.post(`/animals/add`, body);
      alert("Buddy successfully registered!");
      router.push('/animals');
    } catch (error) {
      console.log(error);
      alert("Record update failed!");
    }
  };

  return (
    <Container>
      <form onSubmit={handleRegister}>
        <label>
          Owner Name:
          <input
            type="text"
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Telephone:
          <input
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </label>
        <br />
        <label>
          Animal Name:
          <input
            type="text"
            value={animalName}
            onChange={(e) => setAnimalName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Animal Age:
          <input
            type="number"
            value={animalAge}
            onChange={(e) => setAnimalAge(e.target.value)}
          />
        </label>
        <br />
        <label>
          Type:
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </label>
        <br />
        <label>
          Race:
          <input
            type="text"
            value={race}
            onChange={(e) => setRace(e.target.value)}
          />
        </label>
        <br />
        <button className="save" type="submit">REGISTER</button>
        <Link className="nav" href={'/animals'}>
          <button className="cancel">CANCEL</button>
        </Link>
      </form>
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
};