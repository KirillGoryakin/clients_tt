
export type RadioGroupItem = {
  label: string;
  value: string;
};

export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  status: 'user' | 'admin';
  email: string;
};