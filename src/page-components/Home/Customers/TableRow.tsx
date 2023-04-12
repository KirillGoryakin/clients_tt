import { Customer } from '@/types';
import Jdenticon from 'react-jdenticon';
import styles from './Table.module.scss';
import edit from '@/assets/icons/edit.svg';
import trash from '@/assets/icons/trash.svg';
import Image from 'next/image';
import { useCustomers } from '@/contexts/customers';

type Props = {
  customer: Customer;
};

const TableRow: React.FC<Props> = ({ customer }) => {
  const {
    id,
    firstName,
    lastName,
    company,
    status,
    email,
  } = customer;

  const { setCustomers, setEditingId } = useCustomers();

  const handleEdit = () => {
    setEditingId(customer.id);
  };

  const handleDelete = () => {
    setCustomers(prev => prev.filter(c => c.id !== id));
  };
  
  return (
    <tr>
      <td>
        <div className='flex items-center gap-2'>
          <Jdenticon size='32' value={email} />
          <span>{`${firstName} ${lastName}`}</span>
        </div>
      </td>
      <td>{company}</td>
      <td>{email}</td>
      <td>
        <div className={`
          w-12 h-6 rounded
          ${status === 'admin' ? 'bg-sky-500' : 'bg-slate-200'}
        `} />
      </td>
      <td>
        <div className='flex gap-4'>
          <button onClick={handleEdit}>
            <Image src={edit} alt='Edit' />
          </button>
          <button onClick={handleDelete}>
            <Image src={trash} alt='Delete' />
          </button>
        </div>
      </td>
    </tr>
  );
};

export { TableRow };