import { MagnifyingGlass } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';
import { usePetContext } from '../../context/petContext';

export function Navbar() {
  const path = useLocation().pathname;
  const { handleSearch, search, setSearch } = usePetContext();

  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-50 font-bold text-xl">Pet Health</div>
        {path === '/list-pets' ? (
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <MagnifyingGlass size={20} className="text-primary" />
            </div>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              id="name"
              className="block px-10 py-2 w-[350px] text-sm text-gray-900 rounded-lg border border-primary focus:ring-yellow-500  dark:placeholder-gray-900"
              placeholder="Identificador do Pet"
              required
            />
            <button
              onClick={() => handleSearch(search)}
              type="button"
              className="text-white absolute right-2.5 bottom-2.5 bg-primary
             shadow hover:shadow-lg active:bg-yellow-500
              font-medium rounded-lg text-sm px-4 outline-none focus:outline-none"
            >
              Search
            </button>
          </div>
        ) : null}
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-50 font-semibold hover:text-gray-600">
            Home
          </Link>
          <Link
            to="/register-pet"
            className="text-gray-50 font-semibold hover:text-gray-600"
          >
            Cadastro
          </Link>
          <Link
            to="/list-pets"
            className="text-gray-50 font-semibold hover:text-gray-600"
          >
            Lista de Pets
          </Link>
        </div>
      </div>
    </nav>
  );
}
