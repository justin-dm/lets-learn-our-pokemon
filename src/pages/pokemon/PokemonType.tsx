import classnames from 'classnames';

import styles from '@/styles/Pokemon.module.css';

type PokemonTypesProps = {
  type: string
}

export default function PokemonType({ type }: PokemonTypesProps) {
  return (
    <div className={classnames(styles.type, styles[type])}>
      {type}
    </div>
  );
}