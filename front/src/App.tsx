import { useState, useRef } from "react";
import { animals } from "./api/getAnimals";
import { Ianimal } from "./types/animalInterface";
import { Modal } from "./components/modal";
import { postAnimal } from "./api/postAnimal";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { delAnimal } from "./api/deleteAnimal";
import { updtAnimal } from "./api/updateAnimal";


function App() {
  const queryClient = useQueryClient();
  const [cadAnimal, setCadAnimal] = useState({
    name: '',
    age: 0,
    specie: '',
    breed: '',
    owner_name: '',
    owner_tel: '',
  });
  const mutPost = useMutation({
    mutationFn: postAnimal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['animals'] })
    },
  })
  const mutDelete = useMutation({
    mutationFn: delAnimal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['animals'] })
    },
  })
  const mutUpdate = useMutation({
    mutationFn: updtAnimal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['animals'] })
    }
  })

  const { isLoading, isError, data, error } = animals();
  const nameRef = useRef(null);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCadAnimal({
      ...cadAnimal,
      name: e.target.value
    })
  }
  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCadAnimal({
      ...cadAnimal,
      age: Number(e.target.value)
    })
  }
  const handleSpecie = (value: string) => {
    setCadAnimal({
      ...cadAnimal,
      specie: value
    })
  }
  const handleBreed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCadAnimal({
      ...cadAnimal,
      breed: e.target.value
    })
  }
  const handleOwnerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCadAnimal({
      ...cadAnimal,
      owner_name: e.target.value
    })
  }
  const handleOwnerTel = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCadAnimal({
      ...cadAnimal,
      owner_tel: e.target.value
    })
  }

  
  const newAnimal = () => {

    mutPost.mutate(cadAnimal); 
    setCadAnimal({
      name: '',
      age: 0,
      specie: '',
      breed: '',
      owner_name: '',
      owner_tel: '',
    })   
    
  }

  const deleteAnimal = (value: string) => {
    mutDelete.mutate(value);
  }

  const handleUpdate = (id: string) => {
    mutUpdate.mutate({id, cadAnimal})
  }

  // console.log(data.find((animal) => animal.id == 3));
  

  if (isLoading) {
    return (
      <div className=" flex flex-col h-screen items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (isError && error instanceof Error) {
    return (
      <div className=" flex flex-col h-screen items-center justify-center">
        <div className="alert alert-error w-9/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Erro: {error.message}</span>
        </div>
      </div>
    );

  }

  return (
    <>
      <main className=" bg-base-100 h-[100svh] flex flex-col items-center py-8 gap-6">
        {!data.length && (
          <div className="alert alert-info">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-current shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>
              Ainda não há cadastros realizados, por favor adcione um novo
            </span>
          </div>
        )}

        <h1 className=" text-4xl">Petshop</h1>
        <h2 className=" text-xl">Animais Cadastrados</h2>
        <Modal
          btnName="Cadastrar animal"
          btnStyle=" btn btn-outline btn-primary"
        >
          <form method="dialog" className="modal-box justify-self-center">
            <h3 className="font-bold text-lg mb-4">Novo Animal:</h3>
            <div className=" join join-vertical w-full">
              <input
                ref={nameRef}
                value={cadAnimal.name}
                onChange={handleName}
                className={" input input-bordered input-primary join-item "}
                placeholder="Nome"
              />
              <input
                value={cadAnimal.age}
                onChange={handleAge}
                className=" input input-bordered input-primary join-item"
                placeholder="Idade"
              />
              <select
                defaultValue={"Gato ou Cachorro?"}
                onChange={(e) => handleSpecie(e.target.value)}
                className="select select-bordered select-primary join-item"
              >
                <option disabled>Gato ou Cachorro?</option>
                <option value={"gato"}>Gato</option>
                <option value={"cachorro"}>Cachorro</option>
              </select>
              <input
                value={cadAnimal.breed}
                onChange={handleBreed}
                className=" input input-bordered input-primary join-item"
                placeholder="Raça"
              />
              <input
                value={cadAnimal.owner_name}
                onChange={handleOwnerName}
                className=" input input-bordered input-primary join-item"
                placeholder="Responsável"
              />
              <input
                value={cadAnimal.owner_tel}
                onChange={handleOwnerTel}
                className=" input input-bordered input-primary join-item"
                placeholder="Telefone"
              />
            </div>
            <div className=" modal-action">
              <button onClick={newAnimal} className="btn btn-success">
                Salvar
              </button>
              <button className="btn btn-error">Cancelar</button>
            </div>
          </form>
        </Modal>
        {data.map((animal: Ianimal) => (
          <div key={animal.id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{animal.name}</h2>
              <p>Responsável: {animal.owner_name}</p>
              <p>Tel: {animal.owner_tel}</p>
              <div className="card-actions justify-end gap-6 mt-4">
                {/* <button className="btn btn-sm btn-primary">Detalhes</button> */}
                <Modal btnName="Detalhes" btnStyle=" btn btn-sm btn-primary">
                  
                <form
                    method="dialog"
                    className="modal-box justify-self-center"
                  >
                    <h3 className="font-bold text-lg mb-4">Animal:</h3>
                    <div className=" join join-vertical w-full">
                      <input
                      disabled
                        readOnly
                        value={animal.name}
                        className={
                          " input input-bordered input-primary join-item "
                        }
                        placeholder="Nome"
                      />
                      <input
                      disabled
                        readOnly
                        value={animal.age}
                        className=" input input-bordered input-primary join-item"
                        placeholder="Idade"
                      />
                      <select
                        disabled
                        value={animal.specie}
                        className="select select-bordered select-primary join-item"
                      >
                        <option disabled>Gato ou Cachorro?</option>
                        <option value={"gato"}>Gato</option>
                        <option value={"cachorro"}>Cachorro</option>
                      </select>
                      <input
                        disabled
                        readOnly
                        value={animal.breed}
                        className=" input input-bordered input-primary join-item"
                        placeholder="Raça"
                      />
                      <input
                        disabled
                        readOnly
                        value={animal.owner_name}
                        className=" input input-bordered input-primary join-item"
                        placeholder="Responsável"
                      />
                      <input
                        disabled
                        readOnly
                        value={animal.owner_tel}
                        className=" input input-bordered input-primary join-item"
                        placeholder="Telefone"
                      />
                    </div>
                    <div className=" modal-action">
                      <button className="btn btn-error">Fechar</button>
                    </div>
                  </form>
                  
                </Modal>
                <Modal btnName="Alterar" btnStyle=" btn btn-sm btn-secondary">
                  <form
                    method="dialog"
                    className="modal-box justify-self-center"
                  >
                    <h3 className="font-bold text-lg mb-4">Editar Animal:</h3>
                    <div className=" join join-vertical w-full">
                      <input
                        value={cadAnimal.name}
                        onChange={handleName}
                        className={
                          " input input-bordered input-primary join-item "
                        }
                        placeholder="Nome"
                      />
                      <input
                        value={cadAnimal.age}
                        onChange={handleAge}
                        className=" input input-bordered input-primary join-item"
                        placeholder="Idade"
                      />
                      <select
                        defaultValue={"Gato ou Cachorro?"}
                        onChange={(e) => handleSpecie(e.target.value)}
                        className="select select-bordered select-primary join-item"
                      >
                        <option disabled>Gato ou Cachorro?</option>
                        <option value={"gato"}>Gato</option>
                        <option value={"cachorro"}>Cachorro</option>
                      </select>
                      <input
                        value={cadAnimal.breed}
                        onChange={handleBreed}
                        className=" input input-bordered input-primary join-item"
                        placeholder="Raça"
                      />
                      <input
                        value={cadAnimal.owner_name}
                        onChange={handleOwnerName}
                        className=" input input-bordered input-primary join-item"
                        placeholder="Responsável"
                      />
                      <input
                        value={cadAnimal.owner_tel}
                        onChange={handleOwnerTel}
                        className=" input input-bordered input-primary join-item"
                        placeholder="Telefone"
                      />
                    </div>
                    <div className=" modal-action">
                      <button value={animal.id} onClick={(e) => handleUpdate(e.currentTarget.value)} className="btn btn-success">
                        Salvar
                      </button>
                      <button className="btn btn-error">Cancelar</button>
                    </div>
                  </form>
                </Modal>
                {/* <button onClick={() => handleUpdate} className="btn btn-sm btn-secondary">Alterar</button> */}
                <button
                  value={animal.id}
                  onClick={(e) => deleteAnimal(e.currentTarget.value)}
                  className="btn btn-sm btn-error"
                >
                  Deletar
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </>
  );
}

export default App
