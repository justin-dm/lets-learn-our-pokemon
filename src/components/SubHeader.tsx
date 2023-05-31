import { ReactNode } from 'react';

import styles from '@/styles/SubHeader.module.css';

type SubHeaderProps = {
  children: ReactNode
}

export default function SubHeader({ children }: SubHeaderProps) {
  return (
    <div className={styles.subHeader}>
      <div className={styles.subHeaderContent}>
        {children}
      </div>
    </div>
  );
}