import { usePetContext } from '../../context/petContext';

interface ModalProps {
  warning: boolean;
}
export function Modal({ warning }: ModalProps) {
  const { showModal, setShowModal, dataPet } = usePetContext();
  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div
                  className="flex items-center justify-between p-5 border-b border-solid border-gray-300 
                rounded-t "
                >
                  <h3 className="text-3xl font=semibold">Informação do cadastrado</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block py-0">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <div className="flex flex-col gap-2 bg-gray-100 shadow-md rounded px-4 pt-6 pb-8 w-full">
                    <div className="border border-yellow-400 p-2 bg-yellow-50">
                      <h1 className="text-center text-xl font-bold mb-3">Dados do Pet</h1>
                      <div className="grid grid-cols-4 gap-4">
                        <div>
                          <h1 className="block text-gray-900 text-sm font-bold mb-1">
                            Nome
                          </h1>
                          <h2>{dataPet?.name}</h2>
                        </div>
                        <div>
                          <h1 className="block text-gray-900 text-sm font-bold mb-1">
                            Idade
                          </h1>
                          <h2>{dataPet?.age}</h2>
                        </div>
                        <div>
                          <h1 className="block text-gray-900 text-sm font-bold mb-1">
                            Especie
                          </h1>

                          <h2>{dataPet?.species}</h2>
                        </div>
                        <div>
                          <h1 className="block text-gray-900 text-sm font-bold mb-1">
                            Raça
                          </h1>
                          <h2>{dataPet?.breed}</h2>
                        </div>
                        <div className="col-span-4 text-center">
                          <h2 className="text-gray-900 font-semibold">
                            Identificador do Pet
                          </h2>
                          <h3 className="flex flex-col font-semibold text-xl text-blue-600">
                            {dataPet?.uniqueIndentifier}
                            {warning && (
                              <span className="text-[16px] text-orange-600">
                                *Anotar esse código acima!
                              </span>
                            )}
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className="border flex flex-col gap-y-2 border-yellow-400 p-2 bg-yellow-50">
                      <div className="mb-[2px]">
                        <h1 className="text-gray-900 text-sm font-bold">Nome do dono</h1>
                        <h2>{dataPet?.owner}</h2>
                      </div>
                      <div className="mb-[2px]">
                        <h1 className="block text-gray-900 text-sm font-bold">
                          CPF do dono
                        </h1>
                        <h2>{dataPet?.document}</h2>
                      </div>
                      <div className="mb-[2px]">
                        <h2 className="block text-gray-900 text-sm font-bold">Contato</h2>
                        <h2>{dataPet?.phone}</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
