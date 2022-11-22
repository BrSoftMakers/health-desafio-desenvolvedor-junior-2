import Layout from "../components/layout";
import PetCard from "../components/petCard";
import Link from 'next/link';
import services from "../services";
import Message from "../components/message";


export async function getServerSideProps() {

  try {
    const res = await services.api.get('/pets');
    const pets = res.data;
    
    return {
      props: { pets }
    }
  } catch (err) {
    console.log(err);
  }
  
}

export default function Home({pets}) {

  return (
    <Layout>
      <section className="w-full h-14 flex items-center justify-between sm:justify-around p-8 " >
        <h2 className="text-lg font-bold text-sky-700">Todos os animais</h2>
        <Link href='/form'>
          <button className="bg-sky-700 p-2 rounded text-white font-bold">
            adicionar
          </button>
        </Link>

      </section>

      <section className="p-5 w-full min-h-screen flex flex-col items-center justify-center flex-wrap  sm:flex-row ">


        {pets.length > 0 ? (
          pets.map(pet => (
          <PetCard
            key={pet.id}
            id={pet.id}
            imageURL={pet.imageURL}
            name={pet.name}
            age={pet.age}
            breed={pet.breed}
            ownerName={pet.ownerName}
            type={pet.type}

          />
        ))
        ) : <Message text="Ainda não há animais cadastrados, cadastre um :)" /> }
      </section>
    </Layout>
  )
}
