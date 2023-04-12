
type Props = {
  children: string;
};

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <h4 className='text-xl text-slate-900 font-bold leading-6'>
      {children}
    </h4>
  );
};

export { Heading };