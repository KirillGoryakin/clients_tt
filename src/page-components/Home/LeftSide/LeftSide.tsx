import { Heading } from '@/components/Heading';
import { useCustomers } from '@/contexts/customers';
import { FormAdd } from './FormAdd';
import { FormEdit } from './FormEdit';

const LeftSide = () => {
  const { editingId } = useCustomers();
  
  return (
    <div
      className='min-h-screen p-10 border-r border-slate-200'
      style={{ width: 512 }}
    >
      {editingId === null ? (<>
        <Heading>Add Customer</Heading>
        <FormAdd />
      </>) : (<>
        <Heading>Edit Customer</Heading>
        <FormEdit />
      </>)}
    </div>
  );
};

export { LeftSide };