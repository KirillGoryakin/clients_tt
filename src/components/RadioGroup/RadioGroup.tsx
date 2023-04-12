import { RadioGroupItem } from '@/types';
import styles from './RadioGroup.module.scss';
import { RadioItem } from './RadioItem';
import { useState } from 'react';

type Props = {
  items: RadioGroupItem[];
  name: string;
  label?: string;
  initialValue?: string;
  onChange?: (value: string, prev: string | undefined) => void;
};

const RadioGroup: React.FC<Props> = ({
  items,
  name,
  label,
  initialValue,
  onChange,
}) => {
  const [current, setCurrent] = useState(initialValue);

  const handleChange = (newValue: string) => {
    if (onChange) onChange(newValue, current);
    setCurrent(newValue);
  };
  
  return (
    <div>
      <div className={styles.label}>{label || <br/>}</div>
      <div className={styles.inputs}>
        {items.map(item => (
          <RadioItem
            key={item.label + item.value}
            item={item}
            name={name}
            current={current}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
};

export { RadioGroup };