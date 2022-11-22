
import { useState} from 'react';
import services from '../../services'
import Layout from '../../components/layout';
import { useRouter } from 'next/router'
import InputMask from 'react-input-mask';
import dogBreeds from "../../services/data/dogBreeds";
import catBreeds from '../../services/data/catBreeds';


export default function PetView({ petFields }) {

  const router = useRouter();

  const [pet, setPet] = useState(petFields || {});
  const [imageURL, setImageURL] = useState();
  const [isDog, setIsDog] = useState(pet.type === 'dog' ? true : false);
  const [isCat, setIsCat] = useState(pet.type === 'cat' ? true : false);
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isEditButtonDisabled, setIsEditButtonDisabled] = useState(false);
  const [isSaveButtonDisabled, setIsSaveButtonDisabled] = useState(true);

  const styles = {
    inputStyle: isInputDisabled ? "p-2 w-60 text-xs text-sky-700 font-bold border-b-2 border-sky-700 outline-none placeholder:text-sky-700 placeholder:italic placeholder:font-normal bg-slate-200 my-2" :

      "p-2 w-60 text-xs text-sky-700 font-bold border-b-2 border-sky-700 outline-none placeholder:text-sky-700 placeholder:italic placeholder:font-normal my-2",

    buttonEditStyle: isEditButtonDisabled ? 'w-16 bg-slate-400 p-2 rounded text-white font-bold' :
      'w-16 bg-sky-900 p-2 rounded text-white font-bold',

    buttonSaveStyle: isSaveButtonDisabled ? 'w-16 bg-slate-400 p-2  rounded text-white font-bold' :
      'w-16 bg-sky-900 p-2 rounded text-white font-bold',

    labelStyle: 'text-sm font-bold text-sky-900'
  }


  const changeButtonDisabled = () => {
    setIsInputDisabled(false);
    setIsEditButtonDisabled(true);
    setIsSaveButtonDisabled(false);
  }

  const validationNull = (data) => {
    for(let key of Object.keys(data)) {
      if(data[key] === '') return false
    }

    return true
  }


  

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const pushPetOnAPI = async () => {
      try {
        const res = await services.api.patch(`/pets/${pet.id}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          data: pet,
        });

        console.log(res);
        router.reload();

      } catch (err) {
        console.log(err);
      }
    }


    if(validationNull(pet)) {
      pushPetOnAPI();
      
    } else {
      window.alert('Por favor, preencha todos os campos!')
    }
  }

  const handleDeletePet = () => {
    const deletePet = async () => {
      try {
        const res = await services.api.delete(`/pets/${pet.id}`);
        router.replace('/');
      } catch (err) {
        console.log(err);
      }
    }
    deletePet();
  }

  const handleChangeInput = (e) => {
    setPet({ ...pet, [e.target.name]: e.target.value })
  }

  const handleChangePetType = (e) => {

    const optionValue = e.target.value;
    setPet({ ...pet, [e.target.name]: optionValue });

    if (optionValue == 'cat') {
      setIsDog(false);
      setIsCat(true);
    } else if (optionValue == 'dog') {
      setIsDog(true);
      setIsCat(false);
    }
  }

  const handleChangeBreed = (e) => {

    const optionSelected = e.target.options[e.target.selectedIndex];

    const getImg = async () => {

      const breedId = optionSelected.value

      if (isCat && breedId) {

        const res = await services.theCatAPI.get(`/search?breed_id=${breedId}`);
        const data = res.data[0];
        const url = data.url;
        setImageURL(url);
        setPet({ ...pet, [e.target.name]: optionSelected.text, breedId: breedId, imageURL: url })


      } else if (isDog && breedId) {
        const res = await services.theDogAPI.get(`/search?breed_id=${breedId}`);
        const data = res.data[0];
        const url = data.url;
        setImageURL(url)
        setPet({ ...pet, [e.target.name]: optionSelected.text, breedId: breedId, imageURL: url })
      }
    }

    getImg();

  }


  return (
    <Layout>
      <section className="p-5 w-full min-h-screen flex flex-col items-center justify-center flex-wrap space-y-8 sm:space-y-0 sm:space-x-8 sm:flex-row ">

        {pet && (
          <>
            <picture>
              <img src={imageURL || pet.imageURL} alt="Pet Photo" className='w-52 h-52 sm:w-60 sm:h-60 rounded-md mb-4' />
            </picture>
            <form className="space-y-4" onSubmit={handleOnSubmit} >
              <div className="flex flex-col">
                <label className={styles.labelStyle}>ID</label>
                <input
                  type="text"
                  className="p-2 w-60 text-xs text-sky-700 font-bold border-b-2 border-sky-700  bg-slate-200 my-2"
                  value={pet.id}
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <label className={styles.labelStyle}>Nome</label>
                <input
                  type="text"
                  className={styles.inputStyle}
                  value={pet.name}
                  placeholder='NOME DO PET'
                  name='name'
                  disabled={isInputDisabled}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex flex-col">

                <label className={styles.labelStyle}>Idade</label>
                <input
                  type="number"
                  className={styles.inputStyle}
                  value={pet.age}
                  placeholder='IDADE DO PET'
                  name='age'
                  disabled={isInputDisabled}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex flex-col">
                <label className={styles.labelStyle}>Tipo</label>
                <select
                  className={styles.inputStyle}
                  onChange={handleChangePetType}
                  disabled={isInputDisabled}
                  name='type'
                  defaultValue={pet.type}
                >
                  <option value="dog">Cachorro</option>
                  <option value="cat">Gato</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className={styles.labelStyle}>Raça</label>
                <select
                  className={styles.inputStyle}
                  onChange={handleChangeBreed}
                  disabled={isInputDisabled}
                  name='breed'
                  defaultValue={pet.breedId}
                >

                  {
                    isCat && catBreeds.map((breed, index) => (
                      <option key={index} value={breed.id}>{breed.name}</option>
                    ))
                  }

                  {isDog &&
                    dogBreeds.map((breed, index) => (
                      <option key={index} value={breed.id}>{breed.name}</option>
                    ))
                  }
                </select>
              </div>
              <div className="flex flex-col">
                <label className={styles.labelStyle}>Nome do Proprietário</label>
                <input
                  type="text"
                  className={styles.inputStyle}
                  value={pet.ownerName}
                  placeholder='NOME DO PROPRIETÁRIO'
                  disabled={isInputDisabled}
                  name='ownerName'
                  onChange={handleChangeInput}

                />
              </div>
              <div className="flex flex-col">
                <label className={styles.labelStyle}>Telefone do Proprietário</label>
                <InputMask
                  mask="9 9999-9999"
                  onChange={handleChangeInput}
                  value={pet.ownerTelNumber}
                  name="ownerTelNumber"
                  disabled={isInputDisabled}
                  placeholder="TELEFONE DO PROPRIETÁRIO"
                  className={styles.inputStyle}
                />
              </div>
              <div>
                <div className='w-60 flex justify-between'>
                  <button
                    type="button"
                    className={styles.buttonEditStyle}
                    onClick={changeButtonDisabled}
                  >
                    Editar
                  </button>
                  <button disabled={isSaveButtonDisabled} type='submit' className={styles.buttonSaveStyle}>Salvar</button>
                  <button type='button'
                    className="w-16  bg-sky-900 text-center rounded text-white font-bold"
                    onClick={handleDeletePet}
                  >
                    Excluir
                  </button>
                </div>

              </div>
            </form>
          </>
        )}
      </section>
    </Layout>
  )
}
