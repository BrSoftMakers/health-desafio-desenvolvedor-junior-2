import Layout from "../../components/layout";
import PetCard from "../../components/petCard";
import Link from 'next/link';

import services from "../../services";
import Message from "../../components/message";

export async function getServerSideProps() {
  
  try {
    const res = await services.api.get('/dogs');
    const dogs = res.data;
    
    return {
      props: { dogs }
    }
  } catch (err) {
    console.log(err);
  }
    
  
}

export default function Dogs({dogs}) {

  
  return (
    <Layout>
      <section className="w-full h-14 flex items-center justify-between sm:justify-around p-8" >
        <h2 className="text-lg font-bold text-sky-700">Cachorros</h2>
        <Link href='/form'>
          <button className="bg-sky-700 p-2 rounded text-white font-bold">
            adicionar
          </button>
        </Link>
      </section>
      <section className="p-5 w-full min-h-screen flex flex-col items-center justify-center flex-wrap  sm:flex-row ">


        {dogs.length > 0 ? (
          dogs.map(dog => (
          <PetCard
            key={dog.id}
            id={dog.id}
            imageURL={dog.imageURL}
            name={dog.name}
            age={dog.age}
            breed={dog.breed}
            type={dog.type}
            ownerName={dog.ownerName}
          />
        ))
        ) : (
          <Message text='Ainda não há cachorros cadastrados, cadastre um :)'/>
        )}


      </section>

    </Layout>
  )
}
