import { Button } from '@/components/Button';
import { Heading } from '@/components/Heading';
import { RadioGroup } from '@/components/RadioGroup';
import { TextInput } from '@/components/TextInput';

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

  const handleSubmit = (e: FormSubmitEvent) => {
    e.preventDefault();
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