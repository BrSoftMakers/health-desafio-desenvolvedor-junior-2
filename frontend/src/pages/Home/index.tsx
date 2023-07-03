import { useState } from 'react';
import http from '../../service/api/http';
import { usePetContext } from '../../context/petContext';
import { Modal } from '../../components/Modal';

export function HomePage() {
  const { setDataPet, setShowModal } = usePetContext();
  const [codeId, setCodeId] = useState('');

  const handleSearchPet = async () => {
    const response = await http.get(`/pets/${codeId}`);
    setDataPet(response.data);
    setShowModal(true);
  };
  return (
    <>
      <Modal search />
      <div
        className="w-full flex-col min-h-screen flex bg-bg-image 
        bg-left-rigth bg-leftS-rigthS bg-no-repeat"
      >
        {/* <div className="flex absolute w-full h-screen"> */}
        {/* <div className="w-[50%] h-screen bg-cover bg-left-image"></div>
        <div className="w-[50%] h-screen bg-cover bg-rigth-image"></div> */}
        {/* </div> */}
        <div className="flex flex-col items-center mt-8 h-full bg-transparent">
          <h1 className="w-[800px] h-[100px] text-[64px] font-bold text-center text-white">
            Loving <span className="text-primary">pet</span> care in your neighborhood™
          </h1>
          <div className="flex flex-col gap-y-8 justify-center items-center w-[648px] h-[442px] mt-[152px] rounded-[16px] bg-bg-rgba">
            <div className="flex flex-col gap-2 mb-5">
              <label className="text-white text-lg font-normal" htmlFor="codeId">
                Identificador do Pet
              </label>
              <input
                id="codeId"
                type="text"
                onChange={(e) => setCodeId(e.target.value)}
                value={codeId.toUpperCase()}
                className="w-[350px] text-white h-[46px] roudend-lg bg-bg-rgba px-2"
                placeholder="Ex: PET-9532156"
              />
            </div>
            <button
              onClick={handleSearchPet}
              className="w-[197px] h-[46px] bg-primary rounded-lg font-semibold text-white"
            >
              Buscar Pet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
