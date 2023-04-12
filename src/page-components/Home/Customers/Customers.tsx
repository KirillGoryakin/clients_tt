import { Heading } from '@/components/Heading';
import { Table } from './Table';

type Props = {};

const Customers: React.FC<Props> = () => {
  return (
    <div className='grow p-10'>
      <Heading>Customers</Heading>

      <Table />
    </div>
  );
};

export { Customers };