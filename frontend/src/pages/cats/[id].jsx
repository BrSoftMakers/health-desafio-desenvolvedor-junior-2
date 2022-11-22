import { useEffect, useState } from 'react';
import PetView from '../../components/petView'
import services from '../../services';


function CatDetails({ id }) {

  const [cat, setCat] = useState();

  useEffect(() => {
    
    const getCatById = async () => {
      try {
        const res = await services.api.get(`/pets/${id}`);
        const data = res.data[0];
        setCat(data);
        
      } catch (err) {

        console.log(err);
      }
    }

    getCatById();
  }, [id])


  return (
    <>
      {cat && (
        <PetView petFields={cat} />
      )}
    </>

  )
}

CatDetails.getInitialProps = (context) => {
  return { id: context.query.id }
}

export default CatDetails