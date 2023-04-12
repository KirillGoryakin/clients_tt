import { Customer } from '@/types';
import { TableRow } from './TableRow';
import styles from './Table.module.scss';

type Props = {};

const Table: React.FC<Props> = () => {
  const customers: Customer[] = [
    { id: '1', firstName: 'Kirill', lastName: 'Goryakin', company: 'Apple', email: 'em.eil@gmail.com', status: 'admin' },
    { id: '2', firstName: 'John', lastName: 'Doe', company: 'Google', email: 'john_doe@gmail.com', status: 'user' },
    { id: '3', firstName: 'Elon', lastName: 'Musk', company: 'Tesla', email: 'elon.musk@gmail.com', status: 'user' },
    { id: '4', firstName: 'Test', lastName: 'Testovich', company: 'Miscrosoft', email: 'test@outlook.com', status: 'admin' },
  ];
  
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Admin</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {customers.map(customer => (
          <TableRow key={customer.id} customer={customer} />
        ))}
      </tbody>
    </table>
  );
};

export { Table };