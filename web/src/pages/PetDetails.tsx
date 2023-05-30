import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as AlertDialog from "@radix-ui/react-alert-dialog"
import * as Dialog from "@radix-ui/react-dialog";
import { PetHouseContext } from '../contexts/PetHouse';
import { Cat, Dog, PawPrint, PencilSimple, Phone, TrashSimple, UserCircle } from 'phosphor-react';
import Bone from '../assets/pet-supplies.png'
import Fish from  '../assets/fish-bone.png'
import { ModalDeletePet } from '../components/DeletePetModal';
import { UpdatePetModal } from '../components/UpdatePetModal';


export function PetDetails () {
    const { id } = useParams();
    
    const { handleFindPetById, pet } = useContext(PetHouseContext)
    const findPet = () => {
        handleFindPetById(id as string)
    }
    useEffect(() => {findPet(), handleFindPetById}, [])
    return (
        <div className='max-w-[700px]  mx-auto bg-gray-100 mt-28 rounded-2xl relative'>
            <div className='absolute right-3 top-3'>
                <AlertDialog.Root>
                    <AlertDialog.Trigger asChild >
                        <button className="bg-red-500/[.6] px-4 py-3 rounded-full text-gray-100 font-semibold">
                            <TrashSimple size={32} color="#fff" />
                        </button>
                    </AlertDialog.Trigger>
                    <ModalDeletePet id={id}/>
                </AlertDialog.Root>
            </div>
            <div className="absolute right-3 top-20">
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <button className="bg-red-500/[.6] px-4 py-3 rounded-full text-gray-100 font-semibold">
                            <PencilSimple size={32} color="#fff" />
                        </button>
                    </Dialog.Trigger>
                    <UpdatePetModal/>  
                </Dialog.Root>
            </div>
            <img src={pet?.imageUrl} className='h-[350px] w-full object-cover rounded-t-2xl' />
             <div className='flex items-center justify-around py-5 text-gray-300 font-semibold'>
                <div className='flex items-center justify-center gap-2'>
                    {pet?.type === 'gato' ? <Cat size={32} color="#F15156" /> : <Dog size={32} color="#F4D35E" />}
                    <span>{pet?.name}</span>
                </div >
                <div className='flex items-center justify-center gap-2'>
                    <PawPrint size={32} color="#F15156" />
                    <span>{pet?.race}</span>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <img src={pet?.type === 'gato' ? Fish : Bone} className='w-7' />   
                    <span>{`${pet?.age} ${pet?.age === 1 ? 'ano' : 'anos'}`}</span>
                </div>
            </div>   
            <h2 className='text-center text-gray-300 text-xl font-semibold'>Responsável</h2>
            <div className='flex items-center justify-around py-5 text-gray-300 font-semibold'>
                <div className='flex items-center justify-center gap-2'>
                    <UserCircle size={32} color="#49cdee" />
                    <span>{pet?.petOwner}</span>
                </div>
                <div className='flex items-center justify-center gap-2'>
                    <Phone size={32} color="#49cdee" />
                    <span>{pet?.telephone}</span>
                </div>
            </div>   
        </div>
    )
}