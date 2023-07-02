export function Navbar() {
  return (
    <nav className="bg-yellow-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-900 font-bold text-xl">Logo</div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-900 font-semibold hover:text-gray-600">
            Cadastro
          </a>
          <a href="#" className="text-gray-900 font-semibold hover:text-gray-600">
            Lista de Pets
          </a>
        </div>
      </div>
    </nav>
  );
}
