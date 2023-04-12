import { Customer } from '@/types';
import { createContext, useContext, useState } from 'react';

type CustomersContextValue = {
  customers: Customer[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
};

const customersContext = createContext<CustomersContextValue>({
  customers: [],
  setCustomers: () => {},
});

export const useCustomers = () => useContext(customersContext);

const CustomersProvider = ({ children }: { children: React.ReactNode }) => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  
  return (
    <customersContext.Provider value={{ customers, setCustomers }}>
      {children}
    </customersContext.Provider>
  );
};

export { CustomersProvider };