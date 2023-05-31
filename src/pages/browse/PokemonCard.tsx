import Image from 'next/image';
import Link from 'next/link';
import classnames from 'classnames';

import formatOrder from '@/utils/formatOrder';
import formatPokemonName from '@/utils/formatPokemonName';

import styles from '@/styles/Browse.module.css';

export type PokemonCardProps = {
  id: number,
  order: number,
  name: string,
  sprite: string,
  types: string[],
}

export default function PokemonCard({
  order,
  name = '',
  sprite,
  types = []
}: PokemonCardProps) {
  const [type] = types;

  const nameClasses = classnames(styles.name, {
    [styles.small]: name.length > 10,
    [styles.xsmall]: name.length > 12,
    [styles.xxsmall]: name.length > 14, 
  });

  return (
    <Link href={`/pokemon/${name.toLowerCase()}`}>
      <div className={classnames(styles.card, styles[type])}>
        <div className={styles.column}>

          <div className={styles.row}>
            <div className={nameClasses}>{formatPokemonName(name)}</div>

            <div className={styles.order}>{formatOrder(order)}</div>
          </div>

          <div className={styles.row}>
            <ul className={styles.types}>
              {types.map(type => <li key={type}>{type}</li>)}
            </ul>

            <div className={styles.sprite}>
              <Image
                src={sprite}
                alt={name}
                width={80}
                height={80}
              />
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
}