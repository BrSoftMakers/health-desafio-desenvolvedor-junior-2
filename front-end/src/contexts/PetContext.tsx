import { createContext, ReactNode, useContext } from "react";

export const PetContext = createContext<iPetContext>({} as iPetContext);

interface iPetContext {}
interface IPetProviderProps {
  children: ReactNode;
}

export const PetProvider = ({ children }: IPetProviderProps) => {
  return <PetContext.Provider value={{}}>{children}</PetContext.Provider>;
};

export function useTechContext(): iPetContext {
  const context = useContext(PetContext);

  return context;
}
