import { useEffect, useState } from 'react';
import PetView from '../../components/petView'
import services from '../../services';


function DogDetails({ id }) {

  const [dog, setDog] = useState();

  useEffect(() => {
    
    const getDogById = async () => {
      try {
        const res = await services.api.get(`/pets/${id}`);
        const data = res.data[0];
        setDog(data);
        
      } catch (err) {

        console.log(err);
      }
    }

    getDogById();
  }, [id])


  return (
    <>
      {dog && (
        <PetView petFields={dog} />
      )}
    </>

  )
}

DogDetails.getInitialProps = (context) => {
  return { id: context.query.id }
}

export default DogDetails