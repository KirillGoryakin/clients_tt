import { Heading } from '@/components/Heading';
import { Table } from './Table';

type Props = {};

const Customers: React.FC<Props> = () => {
  return (
    <div className='grow p-10 max-h-screen overflow-y-auto'>
      <Heading>Customers</Heading>

      <Table />
    </div>
  );
};

export { Customers };