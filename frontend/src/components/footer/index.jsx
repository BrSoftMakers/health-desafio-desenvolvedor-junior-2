import Link from 'next/link';
import {FaGithub} from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className="w-full h-16 p-4 flex flex-col justify-center items-center font-bold text-sky-900 text-lg">
      <p className='mb-2'>&copy; feito por Lucas Henrique</p>
        <Link href="https://github.com/forlucashenrique" target='_blank'>
          <FaGithub className='text-2xl mb-2'/>
        </Link>
    </footer>
  )
}