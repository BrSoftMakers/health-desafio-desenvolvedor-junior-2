import * as AlertDialog from "@radix-ui/react-alert-dialog";

import { useContext } from "react";
import {PetHouseContext} from '../contexts/PetHouse'
import {useNavigate} from 'react-router-dom'
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ModalProps {
    id: string | undefined
}

export const ModalDeletePet = ({ id }: ModalProps) => {
    const { handleDeletePet } = useContext(PetHouseContext);
    const navigate = useNavigate()
    const notify = () =>
        toast.success("Atualizado com sucesso", {
            autoClose: 1500,
            position: "top-right",
        });
    return (
        <AlertDialog.Portal>
            <AlertDialog.Overlay className=" fixed w-screen h-screen inset-0 bg-gray-900/[.6]" />
            <AlertDialog.Content className="min-w-[28rem] rounded py-10 px-12 bg-gray-100 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <AlertDialog.Title className="text-gray-300 text-center font-semibold text-xl">
                    Tem certeza que deseja excluir esse PET ?
                </AlertDialog.Title>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <AlertDialog.Cancel asChild>
                        <button className="border-2 border-gray-400 p-2  text-gray-100 rounded bg-gray-400">
                            Cancelar
                        </button>
                    </AlertDialog.Cancel>
                    <AlertDialog.Action asChild>
                        <button onClick={() => { handleDeletePet(String(id)), notify(), navigate('/pets')} } className="bg-red-700 text-red-100 p-2 rounded ">
                            Sim, Excluir Pet

                        </button>
                    </AlertDialog.Action>
                </div>
            </AlertDialog.Content>
            <ToastContainer/>
        </AlertDialog.Portal>
    );
};