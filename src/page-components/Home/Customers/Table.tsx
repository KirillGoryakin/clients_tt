import { TableRow } from './TableRow';
import styles from './Table.module.scss';
import { useCustomers } from '@/contexts/customers';

const Table = () => {
  const { customers } = useCustomers();
  
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th style={{ width: '28%' }}>Name</th>
          <th style={{ width: '28%' }}>Company</th>
          <th style={{ width: '28%' }}>Email</th>
          <th style={{ width: '9%' }}>Admin</th>
          <th style={{ width: '7%' }}>Actions</th>
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