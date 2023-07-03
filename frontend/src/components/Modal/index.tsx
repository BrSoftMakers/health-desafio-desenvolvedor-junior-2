import { usePetContext } from '../../context/petContext';
import { InfoRegister } from './InfoRegister';
import SearchPet from './SearchPet';
import { FormUpdate, IDataUpdate } from './formUpdate';

interface ModalProps {
  warning?: boolean;
  update?: boolean;
  dataUpdate?: IDataUpdate;
  search?: boolean;
}

export function Modal({ warning, update, dataUpdate, search }: ModalProps) {
  const { showModal, setShowModal, dataPet } = usePetContext();

  function ComponentViewInModal() {
    if (update) {
      return <FormUpdate dataUpdate={dataUpdate} />;
    }
    if (search) {
      return (
        <>
          <SearchPet dataPet={dataPet} />
          <div
            className="flex items-center justify-end p-6 border-t 
      border-solid border-blueGray-200 rounded-b"
          >
            <button
              className="text-white bg-primary active:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => setShowModal(false)}
            >
              Fechar
            </button>
          </div>
        </>
      );
    }
    return (
      <>
        <InfoRegister warning={warning} dataPet={dataPet} />
        <div
          className="flex items-center justify-end p-6 border-t 
        border-solid border-blueGray-200 rounded-b"
        >
          <button
            className="text-white bg-primary active:bg-yellow-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Fechar
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {showModal ? (
        <>
          <div
            className="flex justify-center items-center overflow-x-hidden
            overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none
             bg-black bg-opacity-50"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div
                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full
                 bg-white outline-none focus:outline-none"
              >
                <div
                  className="flex items-center justify-between p-5 border-b border-solid
                   border-gray-100 
                    rounded-t gap-x-5"
                >
                  <h3 className="text-3xl font-semibold">
                    {update
                      ? 'Atualizar cadastro'
                      : search
                      ? 'Iformação do Pet'
                      : 'Informação do cadastrado'}
                  </h3>
                  <button
                    className="w-[35px] border flex justify-center items-center
                       text-gray-900 border-primary rounded text-3xl"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>
                <ComponentViewInModal />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
