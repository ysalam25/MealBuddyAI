import React, { createContext, useContext, useState, ReactNode } from 'react';

type PantryItem = {
  id: string;
  name: string;
  quantity: number;
};

type PantryContextType = {
  pantryItems: PantryItem[];
  setPantryItems: (items: PantryItem[]) => void;
};

// Define the context with a specific initial value or undefined
const PantryContext = createContext<PantryContextType>({
  pantryItems: [],
  setPantryItems: () => {}
});

type PantryProviderProps = {
  children: ReactNode;
};

// PantryProvider Component
export const PantryProvider = ({ children }: PantryProviderProps) => {
  const [pantryItems, setPantryItems] = useState<PantryItem[]>([]);

  return (
    <PantryContext.Provider value={{ pantryItems, setPantryItems }}>
      {children}
    </PantryContext.Provider>
  );
};

// usePantry Hook
export const usePantry = () => {
  const context = useContext(PantryContext);
  if (context === undefined) {
    throw new Error('usePantry must be used within a PantryProvider');
  }
  return context;
};
