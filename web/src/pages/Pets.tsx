import { Card } from '../components/Card'
import { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { PetHouseContext } from '../contexts/PetHouse'
import { RegisterPetModal } from "../components/RegisterPetModal";
import { NavLink } from "react-router-dom";


export function Pets() {
    const { pets } = useContext(PetHouseContext)
    console.log(pets);

    return (
        <>
            <div className=" w-full max-w-[1000px] mx-auto px-6 mt-16">
                <div className="flex items-center justify-end px-4 mb-8">
                    <Dialog.Root>
                        <Dialog.Trigger asChild>
                            <button className="bg-red-500 px-4 py-3 rounded text-gray-100 font-semibold">
                                Cadastrar
                            </button>
                        </Dialog.Trigger>
                        <RegisterPetModal />
                    </Dialog.Root>
                </div>
            </div>
            <main className='w-full max-w-[1000px] mx-auto flex flex-wrap gap-8  justify-center items-center mt-16'>
                {pets?.map(pet => (
                    <NavLink key={pet.id} to={`/pet/${pet.id}`}>
                        <Card
                            image={pet.imageUrl}
                            name={pet.name}
                            type={pet.type}
                        />
                    </NavLink>
                ))}
            </main>
        </>
    )
}