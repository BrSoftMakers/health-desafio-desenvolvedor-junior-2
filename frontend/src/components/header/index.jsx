import { MdPets } from 'react-icons/md'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full h-40 shadow-md" >
      <div className="w-full h-24 flex justify-center ">
        <div className='w-80 border-b border-sky-200 flex flex-col items-center justify-center space-x-1'>
          <MdPets className='text-3xl font-bold text-sky-700' />
          <h1 className='text-3xl font-bold text-sky-700'>PetMakers</h1>
        </div>
      </div>
      <div className='w-full h-16 flex space-x-6 justify-center items-center'>
        <Link href='/' className='p-2 hover:underline font-bold text-sky-700 '>
          Todos
        </Link>
        <Link href='/dogs' className='p-2 hover:underline font-bold text-sky-700 '>
          Cachorros
        </Link>
        <Link href='/cats' className='p-2  hover:underline font-bold text-sky-700 '>
          Gatos
        </Link>
      </div>
    </header>
  )
}