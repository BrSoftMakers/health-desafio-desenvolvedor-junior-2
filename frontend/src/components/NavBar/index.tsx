import { Link } from 'react-router-dom';
export function Navbar() {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-50 font-bold text-xl">Pet Health</div>
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
