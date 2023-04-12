import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
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

const LeftSide = () => {
  const { setCustomers } = useCustomers();

  const handleSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();

    const newCustomer: Customer = {
      id: new Date().getTime()+'',
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      company: e.target.company.value,
      status: e.target.status.value,
      email: e.target.email.value,
    };
    setCustomers(prev => [...prev, newCustomer]);

    e.target.firstName.value = '';
    e.target.lastName.value = '';
    e.target.company.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
  };
  
  return (
    <div
      className='min-h-screen p-10 border-r border-slate-200'
      style={{ width: 512 }}
    >
      <Heading>Add Customer</Heading>

      <form
        className='mt-10 flex flex-col gap-6'
        onSubmit={handleSubmit}
      >
        <div className='flex gap-6'>
          <TextInput label='First Name' name='firstName' />
          <TextInput label='Last Name' name='lastName' />
        </div>
        <TextInput label='Company' name='company' />
        <RadioGroup
          label='Status'
          name='status'
          items={[
            {label: 'User', value: 'user'},
            {label: 'Administrator', value: 'admin'},
          ]}
          initialValue='user'
        />
        <TextInput label='Email' name='email' />
        <TextInput
          label='Password' caption='8+ characters'
          name='password' secret
        />
        <Button label='Save' type='submit' />
      </form>
    </div>
  );
};

export { LeftSide };