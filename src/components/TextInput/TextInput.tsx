import { useState } from 'react';
import styles from './TextInput.module.scss';
import eye from '@/assets/icons/eye.svg';
import eyeOff from '@/assets/icons/eye_off.svg';
import Image from 'next/image';

type Props = React.ComponentProps<'input'> & {
  label?: string;
  caption?: string;
  secret?: boolean;
  error?: boolean;
};

const TextInput: React.FC<Props> = ({
  label,
  caption,
  secret = false,
  error = false,
  ...inputProps
}) => {
  const [hidden, setHidden] = useState(secret);
  
  let captionClassName = styles.caption;
  if (error) captionClassName += ` ${styles.caption_error}`; 
  
  return (
    <div className={styles.wrap}>
      <p className={styles.label}>{label || <br />}</p>
      <div className={styles.inputWrap}>
        <input
          className={styles.input}
          {...inputProps}
          type={hidden ? 'password' : 'text'}
        />
        {secret && (
          <button
            className={styles.eye}
            onClick={() => setHidden(!hidden)}
          ><Image src={hidden ? eye : eyeOff} alt='Eye' /></button>
        )}
      </div>
      <p className={captionClassName}>{caption || <br />}</p>
    </div>
  );
};

export { TextInput };