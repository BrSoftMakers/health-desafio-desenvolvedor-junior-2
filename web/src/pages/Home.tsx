import Pets from '../assets/pets.svg'
import { NavLink } from 'react-router-dom';
import { ArrowLineRight } from 'phosphor-react';

export function Home () {
    return (

        <div className='bg-red-500 h-screen '>
            <div className='max-w-[1200px] w-full mx-auto py-8 px-5'>
                <main className='flex items-center justify-around my-10 text-gray-100'>
                    <h1 className='font-bold  text-4xl md:text-6xl'>
                        Leve <br /> a felicidade <br /> para o seu pet
                    </h1>
                    <img src={Pets} alt="cachorro e gatos juntos" />
                </main>
                <section className='flex items-end justify-end mt-24 px-8'>
                       <NavLink to="/pets" className="bg-yellow-300 p-5 rounded-3xl">
                            <ArrowLineRight size={38}color="#000" />     
                        </NavLink>     
                </section>
            </div>  
        </div>
)
}