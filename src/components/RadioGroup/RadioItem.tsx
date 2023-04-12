import { RadioGroupItem } from '@/types';
import styles from './RadioGroup.module.scss';

type Props = {
  item: RadioGroupItem;
  name: string;
  current: string | undefined;
  onChange: (v: string) => void;
};

const RadioItem: React.FC<Props> = ({
  item,
  name,
  current,
  onChange,
}) => {
  const selected = current === item.value;
  
  let labelClass = styles.itemLabel;
  if (selected) labelClass += ` ${styles.itemLabel_selected}`;
  
  return (
    <label className={labelClass}>
      {item.label}
      <input
        className='hidden'
        type='radio'
        name={name}
        value={item.value}
        checked={selected}
        onChange={e => e.target.checked && onChange(item.value)}
      />
    </label>
  );
};

export { RadioItem };