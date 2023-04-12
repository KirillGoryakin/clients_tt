import { Customer } from '@/types';
import { createContext, useContext, useState } from 'react';

type CustomersContextValue = {
  customers: Customer[];
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
  editingId: string | null;
  setEditingId: React.Dispatch<React.SetStateAction<string | null>>;
};

const customersContext = createContext<CustomersContextValue>({
  customers: [],
  setCustomers: () => {},
  editingId: null,
  setEditingId: () => {},
});

export const useCustomers = () => useContext(customersContext);

const CustomersProvider = ({ children }: { children: React.ReactNode }) => {
  const [customers, setCustomers] = useState<Customer[]>([
    { id: '1', firstName: 'Kirill', lastName: 'Goryakin', company: 'Apple', email: 'em.eil@gmail.com', status: 'admin' },
    { id: '2', firstName: 'John', lastName: 'Doe', company: 'Google', email: 'john_doe@gmail.com', status: 'user' },
    { id: '3', firstName: 'Elon', lastName: 'Musk', company: 'Tesla', email: 'elon.musk@gmail.com', status: 'user' },
    { id: '4', firstName: 'Test', lastName: 'Testovich', company: 'Miscrosoft', email: 'test@outlook.com', status: 'admin' },
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);
  
  return (
    <customersContext.Provider value={{
      customers, setCustomers,
      editingId, setEditingId,
    }}>
      {children}
    </customersContext.Provider>
  );
};

export { CustomersProvider };