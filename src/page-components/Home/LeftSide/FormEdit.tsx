import { Button } from '@/components/Button';
import { RadioGroup } from '@/components/RadioGroup';
import { TextInput } from '@/components/TextInput';
import { useCustomers } from '@/contexts/customers';
import { Customer } from '@/types';

type FormSubmitEvent = React.FormEvent<HTMLFormElement> & {
  target: {
    firstName: HTMLInputElement;
    lastName: HTMLInputElement;
    company: HTMLInputElement;
    status: HTMLInputElement;
    email: HTMLInputElement;
    password: HTMLInputElement;
  };
};

const FormEdit = () => {
  const { editingId, setEditingId, customers, setCustomers } = useCustomers();
  const customer = customers.find(c => c.id === editingId);

  if (!customer) return null;

  const handleSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();

    const newCustomer: Customer = {
      ...customer,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      company: e.target.company.value,
      status: e.target.status.value,
      email: e.target.email.value,
    };
    setCustomers(prev => prev.map(c => {
      if (c.id === customer.id)
        return newCustomer;
      return c;
    }));

    setEditingId(null);
  };
  
  return (
    <form
      className='mt-10 flex flex-col gap-6'
      onSubmit={handleSubmit}
    >
      <div className='flex gap-6'>
        <TextInput
          key={'firstName' + customer.firstName}
          label='First Name'
          name='firstName'
          defaultValue={customer.firstName}
        />
        <TextInput
          key={'lastName' + customer.lastName}
          label='Last Name'
          name='lastName'
          defaultValue={customer.lastName}
        />
      </div>

      <TextInput
        key={'company' + customer.company}
        label='Company'
        name='company'
        defaultValue={customer.company}
      />

      <RadioGroup
        key={'status' + customer.status}
        label='Status'
        name='status'
        items={[
          { label: 'User', value: 'user' },
          { label: 'Administrator', value: 'admin' },
        ]}
        initialValue={customer.status}
      />

      <TextInput
        key={'email' + customer.email}
        label='Email'
        name='email'
        defaultValue={customer.email}
      />

      <Button label='Save' type='submit' />
    </form>
  );
};

export { FormEdit };