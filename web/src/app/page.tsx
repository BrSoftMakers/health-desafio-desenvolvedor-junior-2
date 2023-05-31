import { Container, Button } from "./style";
import Image from "next/image";
import Link from "next/link";
import background from "../assets/background.jpg";

export default async function Home() {
  return (
    <Container>
      <Link className="nav" href={'/animals/'}>
        <Button>Let's start!</Button>
      </Link>
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