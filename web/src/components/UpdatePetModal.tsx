import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { PetHouseContext } from "../contexts/PetHouse";
import { useForm } from "react-hook-form";
import logo from '../assets/logo.svg'
import {useNavigate}  from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const registerPetSchema = z.object({
    id: z.string().optional(),    
    name: z.string().optional(),
    age: z.number().optional(),
    imageUrl: z.string().optional(),
    type: z.enum(['gato', 'cachorro']).optional(),
    race: z.string().optional(),
    telephone: z.string().optional(),
    petOwner: z.string().optional()
})

type NewRegisterPetFromInputs = z.infer<typeof registerPetSchema>

export const UpdatePetModal = ({ id, name, age, imageUrl, petOwner, race, telephone, type }: NewRegisterPetFromInputs) => {
    const { handleUpdatePet } = useContext(PetHouseContext)
    const { register, handleSubmit,setValue } = useForm<NewRegisterPetFromInputs>({
        resolver: zodResolver(registerPetSchema)
    })
    const notify = () =>
        toast.success("Atualizado com sucesso", {
            autoClose: 1500,
            position: "top-right",
        });

    const navigate = useNavigate()
    const updatePet = (data: NewRegisterPetFromInputs) => {
        const petData = {
            id,
            name: data.name,
            age: data.age,
            imageUrl: data.imageUrl,
            type: data.type,
            race: data.race,
            telephone: data.telephone,
            petOwner: data.petOwner
        }
        handleUpdatePet(petData)
        notify()
    }
    useEffect(() => {
        setValue('name', name)
        setValue('age', age)
        setValue('imageUrl', imageUrl)
        setValue('race', race)
        setValue('petOwner', petOwner)
        setValue('telephone', telephone)
        setValue('type', type)
    }, [])
    return (
        <Dialog.Portal>
            <Dialog.Overlay className=" fixed w-screen h-screen inset-0 bg-gray-900/[.6]" />
            <Dialog.Content className="min-w-[32rem] rounded py-10 px-12 bg-gray-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <header className="flex items-center justify-center">
                    <Dialog.Title className="flex items-center justify-center gap-3 text-blue-700 font-semibold text-3xl">
                        <img src={logo} alt="" className="bg-yellow-400 p-1 rounded-2xl" />
                        Atualizar um pet
                    </Dialog.Title>
                    <Dialog.Close className="absolute bg-transparent border-spacing-0 top-5 right-5 text-gray-300 line-through ">
                        <X size={24} />
                    </Dialog.Close>

                </header>
                <form className="mt-8 flex flex-col gap-4 text-gray-300" onSubmit={handleSubmit(updatePet)}>
                    <input
                        className="rounded bg-blue-50 border-2 border-blue-100  text-gray-300 p-4 placeholder:text-gray-300 "
                        type="text"
                        {...register('imageUrl')}
                        placeholder="Foto URL"
                        
                    />
                    <div className="flex items-center justify-center gap-2">
                        <input
                            className="rounded bg-blue-50 border-2 border-blue-100  p-4 placeholder:text-gray-300 "
                            type="text"
                            {...register('name')}
                            placeholder="Nome"
                            
                        />
                        <input
                            className="rounded bg-blue-50 border-2 border-blue-100  p-4 placeholder:text-gray-300 "
                            type="number"
                            {...register('age', { valueAsNumber: true })}
                            placeholder="Idade"
                            
                        />

                    </div>
                    <div className="flex items-center justify-center gap-2 w-full">
                        <input
                            className="rounded bg-blue-50 border-2 border-blue-100  p-4 placeholder:text-gray-300 "
                            type="text"
                            {...register('race')}
                            placeholder="Raça"
                           
                        />
                        <select
                            className=" w-1/2 rounded bg-blue-50 border-2 border-blue-100   p-4 placeholder:text-gray-300 "
                            {...register('type',)}
                            placeholder="Selecione"
                            
                        >
                            <option value="Selecione">Selecione</option>
                            <option value="gato">Gato</option>
                            <option value="cachorro">Cachorro</option>
                        </select>

                    </div>
                    <div className="flex items-center justify-center gap-2">
                        <input
                            className="rounded bg-blue-50 border-2 border-blue-100   p-4 placeholder:text-gray-300 "
                            type="text"
                            {...register('telephone')}
                            placeholder="Telefone"
                            
                        />
                        <input
                            className="rounded bg-blue-50 border-2 border-blue-100   p-4 placeholder:text-gray-300 "
                            type="text"
                            {...register('petOwner')}
                            placeholder="Responsável"
                            
                        />

                    </div>
                    <button
                        className="rounded border-spacing-0 bg-red-500 px-5 mt-6 h-[58px] text-gray-100 cursor-pointer hover:bg-red-300 font-semibold text-xl disabled:opacity-60 "
                        type="submit"
                        onClick={() => navigate(`/pet/${id}`)}
                    >
                        Salvar
                    </button>
                </form>
            </Dialog.Content>
            <ToastContainer/>
        </Dialog.Portal>
    )
}