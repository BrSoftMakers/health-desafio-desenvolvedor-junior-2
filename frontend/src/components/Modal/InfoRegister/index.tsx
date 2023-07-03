import { IPet } from '../../../context/petContext';

interface InfoRegisterProps {
  dataPet: IPet | undefined;
  warning?: boolean;
}
export function InfoRegister({ dataPet, warning }: InfoRegisterProps) {
  return (
    <div className="relative p-6 flex-auto">
      <div className="flex flex-col gap-2 bg-gray-50 shadow-sm rounded px-4 pt-6 pb-8 w-full">
        <div className="border border-primary p-2 bg-slate-50">
          <h1 className="text-center text-xl font-bold mb-3">Dados do Pet</h1>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h1 className="block text-gray-900 text-sm font-bold mb-1">Nome</h1>
              <h2>{dataPet?.name}</h2>
            </div>
            <div>
              <h1 className="block text-gray-900 text-sm font-bold mb-1">Idade</h1>
              <h2>{dataPet?.age}</h2>
            </div>
            <div>
              <h1 className="block text-gray-900 text-sm font-bold mb-1">Especie</h1>

              <h2>{dataPet?.species}</h2>
            </div>
            <div>
              <h1 className="block text-gray-900 text-sm font-bold mb-1">Raça</h1>
              <h2>{dataPet?.breed}</h2>
            </div>
            <div className="col-span-4 text-center">
              <h2 className="text-gray-900 font-semibold">Identificador do Pet</h2>
              <h3 className="flex flex-col font-semibold text-xl text-blue-600">
                {dataPet?.uniqueIndentifier}
                {warning && (
                  <span className="text-[16px] text-orange-600">
                    *Anotar esse código acima!
                  </span>
                )}
              </h3>
            </div>
          </div>
        </div>
        <div className="border flex flex-col gap-y-2 border-primary p-2 bg-slate-50">
          <div className="mb-[2px]">
            <h1 className="text-gray-900 text-sm font-bold">Nome do dono</h1>
            <h2>{dataPet?.owner}</h2>
          </div>
          <div className="mb-[2px]">
            <h1 className="block text-gray-900 text-sm font-bold">CPF do dono</h1>
            <h2>{dataPet?.document}</h2>
          </div>
          <div className="mb-[2px]">
            <h2 className="block text-gray-900 text-sm font-bold">Contato</h2>
            <h2>{dataPet?.phone}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
