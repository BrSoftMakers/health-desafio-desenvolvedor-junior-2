import Layout from "../../components/layout";
import PetCard from "../../components/petCard";
import Link from 'next/link';
import services from "../../services";
import Message from "../../components/message";


export async function getServerSideProps() {
  
  try {
    const res = await services.api.get('/cats');
    const cats = res.data;
    
    return {
      props: { cats }
    }
  } catch (err) {
    console.log(err);
  }
    
}

export default function Cats({cats}) {

  return (
    <Layout>
      <section className="w-full h-14 flex items-center justify-between sm:justify-around p-8" >
        <h2 className="text-lg font-bold text-sky-700">Gatos</h2>
        <Link href='/form'>
          <button className="bg-sky-700 p-2 rounded text-white font-bold">
            adicionar
          </button>
        </Link>
      </section>
      <section className="p-5 w-full min-h-screen flex flex-col items-center justify-center flex-wrap sm:flex-row ">


        {cats.length > 0 ? (
          cats.map(cat => (
          <PetCard
            key={cat.id}
            id={cat.id}
            imageURL={cat.imageURL}
            name={cat.name}
            age={cat.age}
            breed={cat.breed}
            type={cat.type}
            ownerName={cat.ownerName}

          />
        ))
        ) : (
          <Message text='Ainda não há gatos cadastrados, cadastre um :)'/>
        ) }

      </section>

    </Layout>
  )
}
