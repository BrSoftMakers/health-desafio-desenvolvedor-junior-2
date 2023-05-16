import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { PetHouseContext } from "../contexts/PetHouse";
import { useForm } from "react-hook-form";
import logo from '../assets/logo.svg'

const registerPetSchema = z.object({
    name: z.string().min(3, 'O campo nome e obrigatorio'),
    age: z.number().positive('A idade invalida'),
    imageUrl: z.string().nonempty('O campo Foto e obrigatorio'),
    type: z.enum(['gato', 'cachorro']), 
    race: z.string().nonempty('O campo Raca e obrigatorio'),
    telephone: z.string().nonempty('O campo Telefone e obrigatorio'),
    petOwner: z.string().min(3,'O campo responsavel e obrigatorio')
})

type NewRegisterPetFromInputs = z.infer<typeof registerPetSchema>

export const RegisterPetModal = () => {
    const {handleRegisterNewPet} = useContext(PetHouseContext)
    const { register, handleSubmit, reset, } = useForm<NewRegisterPetFromInputs>({
        resolver: zodResolver(registerPetSchema)
    })    
    const registerNewPet = (data: NewRegisterPetFromInputs) => {
        handleRegisterNewPet(data)
        reset()
        console.log(data);
        
    }
    return (
        <Dialog.Portal>
            <Dialog.Overlay className=" fixed w-screen h-screen inset-0 bg-gray-900/[.6]" />
            <Dialog.Content className="min-w-[32rem] rounded py-10 px-12 bg-gray-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <header className="flex items-center justify-center">
                    <Dialog.Title className="flex items-center justify-center gap-3 text-blue-700 font-semibold text-3xl">
                        <img src={logo} alt="" className="bg-yellow-400 p-1 rounded-2xl" />
                        Adicione um pet
                    </Dialog.Title>
                    <Dialog.Close className="absolute bg-transparent border-spacing-0 top-5 right-5 text-gray-300 line-through ">
                        <X size={24} />
                    </Dialog.Close>
        
                </header>
                <form className="mt-8 flex flex-col gap-4 text-gray-300" onSubmit={handleSubmit(registerNewPet)}>
                    <input
                        className="rounded bg-blue-50 border-2 border-blue-100  text-gray-300 p-4 placeholder:text-gray-300 "
                        type="text"
                        {...register('imageUrl')}
                        placeholder="Foto URL"
                        required
                    />
                    <div className="flex items-center justify-center gap-2">
                        <input
                            className="rounded bg-blue-50 border-2 border-blue-100  p-4 placeholder:text-gray-300 "
                            type="text"
                            {...register('name')}
                            placeholder="Nome"
                            required
                        />
                        <input
                            className="rounded bg-blue-50 border-2 border-blue-100  p-4 placeholder:text-gray-300 "
                            type="number"
                            {...register('age', { valueAsNumber: true })}
                            placeholder="Idade"
                            required
                        />

                    </div>
                    <div className="flex items-center justify-center gap-2 w-full">
                        <input
                            className="rounded bg-blue-50 border-2 border-blue-100  p-4 placeholder:text-gray-300 "
                            type="text"
                            {...register('race')}
                            placeholder="Raca"
                            required
                        />
                        <select
                            className=" w-1/2 rounded bg-blue-50 border-2 border-blue-100   p-4 placeholder:text-gray-300 "
                            {...register('type',)}
                            placeholder="Selecione"
                            required
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
                            required
                        />
                        <input
                            className="rounded bg-blue-50 border-2 border-blue-100   p-4 placeholder:text-gray-300 "
                            type="text"
                            {...register('petOwner')}
                            placeholder="Responsavel"
                            required
                        />

                    </div>
                    <button
                        className="rounded border-spacing-0 bg-red-500 px-5 mt-6 h-[58px] text-gray-100 cursor-pointer hover:bg-red-300 font-semibold text-xl disabled:opacity-60 "
                        type="submit"
                
                    >
                        Registrar
                    </button>
                </form>
            </Dialog.Content>
        </Dialog.Portal>   
    )
}