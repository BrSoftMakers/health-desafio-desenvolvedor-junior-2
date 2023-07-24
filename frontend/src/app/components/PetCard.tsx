import Image from "next/image";
import Link from "next/link";

interface PetCardProps {
  id: string;
  name: string;
  imageURL: string;
}

export const PetCard = ({ id, name, imageURL }: PetCardProps) => {
  return (
    <>
      <Link href={`/pets/${id}`}>
        <div className="flex flex-col justify-center items-center mb-5 border p-5 rounded-lg shadow-md cursor-pointer h-[400px]">
          <Image src={imageURL} alt={name} width={260} height={260} className="mb-3" />
          <p className="text-xl font-bold">
            Nome: <span className="font-normal">{name}</span>
          </p>
        </div>
      </Link>
    </>
  );
};
