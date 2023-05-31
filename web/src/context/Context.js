'use client'

import { createContext, useState } from "react";

export const Data = createContext();

function Context({ children }) {
  const [control, setControl] = useState(0);

  return (
    <Data.Provider value={{ control, setControl }}>
      {children}
    </Data.Provider>
  );
}

export default Context;