
import { FaCat } from 'react-icons/fa'
import { FaDog } from 'react-icons/fa'
import Link from 'next/link'



export default function PetCard(pet) {

  const url = pet.type === 'cat' ? '/cats' : '/dogs'

  return (
    <Link href={`${url}/${pet.id}`}>
      <div className="max-w-max max-h-max p-4 mb-4 mr-4 hover:shadow-sky-900 shadow-2xl cursor-pointer border rounded-md border-sky-700 flex flex-col justify-center items-center" >
        <div className='relative'>
          <div className='absolute right-1 top-1 bg-white p-2 rounded-full'>

            {pet.type == 'dog' ? (

              <FaDog className='text-sky-700 text-lg' />

            ) : (

              <FaCat className='text-sky-700 text-lg' />

            )}
          </div>

          <picture>
            <img className='w-60 h-48 rounded-md' src={pet.imageURL} alt="" />
          </picture>
        </div>
        <div className='mt-4 w-60'>
          <p className='text-sky-700 text-lg w-60'>
            <span className='inline-block w-20 font-bold'>Nome:</span> <span>{pet.name}</span>
          </p>

          <p className='text-sky-700 text-lg w-60'>
            <span className='inline-block w-20 font-bold'>Idade:</span> <span>{parseInt(pet.age) > 1 ? `${pet.age} anos`: `${pet.age} ano`}</span>
          </p>

          <p className='text-sky-700 text-lg w-60'>
            <span className='inline-block w-20 font-bold'>Dono:</span> <span>{pet.ownerName}</span>
          </p>


        </div>
      </div>
    </Link>

  )
}