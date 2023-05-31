import { api } from "@/lib/api";
import { Container, Section } from "./style";
import Image from "next/image";
import background from "../../assets/background.jpg";
import { Animal } from "@/types/animal";
import Animals from "@/components/Animals";

export default async function ListingPage() {
  const response = await api.get('/animals');

  const animals: Animal[] = response.data

  return (
    <Container>
      <h1>Registered Buddies</h1>
      {
        animals.length === 0 ? <h1>Loading</h1> : <Section><Animals animals={animals} /></Section>
      }
      <Image
        alt=""
        src={background}
        priority={false}
        objectFit="cover"
        fill
        quality={100}
      />
    </Container>
  )
}