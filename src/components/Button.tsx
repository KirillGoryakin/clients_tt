
type Props = React.ComponentProps<'button'> & {
  label: string;
};

const Button: React.FC<Props> = ({ label, ...buttonProps }) => {
  return (
    <button
      {...buttonProps}
      className={`
        w-full px-3 py-2
        rounded-lg bg-sky-500 hover:bg-sky-600
        transition-colors
      `}
    >
      <span className='text-base font-bold text-white'>
        {label}
      </span>
    </button>
  );
};

export { Button };