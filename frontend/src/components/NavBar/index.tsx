import { Link } from 'react-router-dom';
export function Navbar() {
  return (
    <nav className="bg-yellow-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-900 font-bold text-xl">Logo</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-900 font-semibold hover:text-gray-600">
            Home
          </Link>
          <Link
            to="/register-pet"
            className="text-gray-900 font-semibold hover:text-gray-600"
          >
            Cadastro
          </Link>
          <Link
            to="/list-pets"
            className="text-gray-900 font-semibold hover:text-gray-600"
          >
            Lista de Pets
          </Link>
        </div>
      </div>
    </nav>
  );
}
