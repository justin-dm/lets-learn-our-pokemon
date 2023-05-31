import { ReactNode } from 'react';
import classnames from 'classnames';

import styles from '@/styles/Container.module.css';

type ContainerProps = {
  classNames?: string
  children: ReactNode
}

export default function Container({ classNames, children }: ContainerProps) {
  return (
    <div className={classnames(styles.container, classNames)}>
        {children}
    </div>
  );
}