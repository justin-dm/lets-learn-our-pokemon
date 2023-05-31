import classnames from 'classnames';

import styles from '@/styles/Pokemon.module.css';

type InfoProps = {
  label: string
  value: string | number
}

export default function Info({ label, value }: InfoProps) {
  return (
    <div className={classnames(styles.center, styles.info)}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}