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
        className="w-full bg-slate-700 md:bg-image-cover md:bg-cover flex-col 
          min-h-screen md:min-h-screen flex lg:bg-bg-image lg:bg-left-rigth lg:bg-leftS-rigthS md:bg-no-repeat"
      >
        <div className="flex flex-col items-center mt-8 h-full bg-transparent">
          <h1 className="w-[800px] h-[100px] md:text-[52px] lg:text-[64px] font-bold text-center text-white">
            Loving <span className="text-primary">pet</span> care in your neighborhood™
          </h1>
          <div
            className="flex flex-col gap-y-8 md:justify-center md:items-center w-[90%] h-80 md:w-[648px] 
            md:h-[442px] md:mt-[152px] rounded-[16px] bg-bg-rgba"
          >
            <div className="flex flex-col gap-2 mb-5">
              <label className="text-white text-lg font-normal" htmlFor="codeId">
                Identificador do Pet
              </label>
              <input
                id="codeId"
                type="text"
                onChange={(e) => setCodeId(e.target.value)}
                value={codeId.toUpperCase()}
                className="md:w-[350px] text-white md:h-[46px] roudend-lg bg-input-rgba px-2"
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
