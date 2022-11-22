import { useState } from "react";
import {useRouter} from 'next/router';
import InputMask from "react-input-mask";
import catBreeds from '../../services/data/catBreeds';
import dogBreeds from "../../services/data/dogBreeds";
import Layout from "../../components/layout";
import services from '../../services';

export default function Form() {

  const router = useRouter();

  const [isDog, setIsDog] = useState(true);
  const [isCat, setIsCat] = useState(false);
  const [imageURL, setImageUrl] = useState(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [type, setType] = useState('dog');
  const [breed, setBreed] = useState('');
  const [breedId, setBreedId] = useState(null);
  const [ownerName, setOwnerName] = useState('');
  const [ownerTelNumber, setOwnerTelNumber] = useState('');


  const validationNull = (data) => {
    for(let key of Object.keys(data)) {
      if(data[key] === '') return false
    }

    return true
  }


  const validationBreed = (imgUrl) => {
    if(imgUrl){
      return true
    }

    return false
  }


  const handleOnSubmit = (e) => {
    e.preventDefault();

    const petFields = { name, age, type, breed, breedId, ownerName, ownerTelNumber, imageURL }


    const pushPetOnAPI = async () => {
      try {
        const res = await services.api.post('/pets', {
          headers: {
            'Content-Type': 'application/json'
          },
          data: petFields,
        });

        router.replace('/');

      } catch (err) {
        console.log(err);
      }
    }

    if (!validationBreed(imageURL)) {
      window.alert('Por favor, selecione uma raça.')
      return
    }
    
    if(validationNull(petFields)) {
      pushPetOnAPI();
      
    } else {
      window.alert('Por favor, preencha todos os campos!')
    }
  }

  const handleChangePetType = (e) => {

    const optionValue = e.target.value;
    setType(optionValue);

    if (optionValue == 'cat') {
      setIsDog(false);
      setIsCat(true);
    } else if (optionValue == 'dog') {
      setIsDog(true);
      setIsCat(false);
    }

  }

  const handleChangeBreed = (e) => {

    const optionSelected = e.target.options[e.target.options.selectedIndex];
    setBreed(optionSelected.text);
    setBreedId(optionSelected.value);

    const getImg = async () => {

      const breedIdValue = optionSelected.value

      if (isCat && breedIdValue) {

        const res = await services.theCatAPI.get(`/search?breed_id=${breedIdValue}`);
        const data = res.data[0];
        const url = data.url;
        setImageUrl(url);


      } else if (isDog && breedIdValue) {
        const res = await services.theDogAPI.get(`/search?breed_id=${breedIdValue}`);
        const data = res.data[0];
        const url = data.url;
        setImageUrl(url)
      }
    }

    getImg();


  }


  return (
    <Layout>
      <section className="p-5 w-full min-h-screen flex flex-col justify-between sm:justify-center items-center sm:flex-row sm:space-x-16">


        {
          imageURL ? (
            <div>
              <picture>
                <img src={imageURL} alt="petIcon" className="w-40 h-40 rounded-md sm:w-60 sm:h-60" />
              </picture>
            </div>
          ) : (
            <div className="my-10">
              <picture>
                <img src='/petIcon.png' alt="petIcon" className="w-16 h-16 sm:w-24 sm:h-24" />
              </picture>
            </div>

          )

        }

        <form className="space-y-4" onSubmit={handleOnSubmit} >
          <div className="flex flex-col">

            <input
              type="text"
              className="p-2 w-60 text-xs text-sky-700 font-bold border-b-2 border-sky-700 outline-none placeholder:text-sky-700 placeholder:italic placeholder:font-normal my-8"
              value={name}
              name='name'
              placeholder='NOME DO PET'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">

            <input
              type="number"
              className="p-2 w-60 text-xs text-sky-700 font-bold border-b-2 border-sky-700 outline-none placeholder:text-sky-700 placeholder:italic placeholder:font-normal mb-8"
              value={age}
              name='age'
              placeholder='IDADE DO PET'
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex flex-col">

            <select
              className="p-2 w-60 text-xs text-sky-700 font-bold border-b-2 border-sky-700 outline-none placeholder:text-sky-700 placeholder:italic placeholder:font-normal mb-8 "
              onChange={handleChangePetType}
              name='type'
            >
              <option value="dog">Cachorro</option>
              <option value="cat">Gato</option>
            </select>
          </div>
          <div className="flex flex-col">

            <select
              className="p-2 w-60 text-xs text-sky-700 font-bold border-b-2 border-sky-700 outline-none placeholder:text-sky-900 placeholder:italic placeholder:font-normal mb-8 "
              onChange={handleChangeBreed}
              name='petBreed'
            >
              <option value="">Selecione a raça</option>
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

            <input
              type="text"
              className="p-2 w-60 text-xs  text-sky-700 font-bold border-b-2 border-sky-700 outline-none placeholder:text-sky-700 placeholder:italic placeholder:font-normal mb-8"
              value={ownerName}
              name='ownerName'
              placeholder='NOME DO PROPRIETÁRIO'
              onChange={(e) => setOwnerName(e.target.value)}

            />
          </div>
          <div className="flex flex-col">

            <InputMask
              mask="9 9999-9999"
              onChange={(e) => setOwnerTelNumber(e.target.value)}
              value={ownerTelNumber}
              name="ownerTelNumber"
              placeholder="TELEFONE DO PROPRIETÁRIO"
              className="p-2 w-60 text-xs  text-sky-700  border-b-2 font-bold border-sky-700 outline-none placeholder:text-sky-700 placeholder:italic placeholder:font-normal mb-8"
            />

          </div>
          <div>
            <button type='submit' className="w-60 bg-sky-700 p-2 rounded text-white font-bold">Adicionar</button>
          </div>
        </form>

      </section>
    </Layout>
  )
}