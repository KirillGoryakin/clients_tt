import { Heading } from '@/components/Heading';
import { Table } from './Table';

const Customers = () => {
  return (
    <div className='grow p-10 max-h-screen overflow-y-auto'>
      <Heading>Customers</Heading>

      <Table />
    </div>
  );
};

export { Customers };