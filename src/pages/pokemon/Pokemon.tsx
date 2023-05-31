import classnames from 'classnames';
import Image from 'next/image';

import Name from './Name';
import Info from './Info';
import Stat from './Stat';
import PokemonType from './PokemonType';

import styles from '@/styles/Pokemon.module.css';

export type PokemonProps = {
  name: string
  id: number
  order: number
  height: number
  weight: number
  abilities: string[]
  stats: {
    name: string
    base: number
  }[],
  types: string[]
}

function formatId(order: Number) {
  return `${String(order).padStart(3, '0')}`;
}

export default function Pokemon({
  id,
  name,
  height,
  weight,
  abilities = [],
  stats = [],
  types = [],
}: PokemonProps) {
  // sprites
  // const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png` 
  // steal some better images 🤞
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatId(id)}.png`;

  const [type] = [...types];

  return (
    <>
      <div className={styles.row}>
        <div className={classnames(styles.image, styles[type])}>
          <Image
            src={image}
            width={225}
            height={225}
            alt={name}
          />
        </div>

        <div className={classnames(styles.center, styles.infoPanel)}>
          {/* Pokemon Name */}
          <Name name={name} />
          {/* Pokemon Weight and Height */}
          <div className={styles.row}>
            <Info label="Weight" value={`${weight} KG`} />
            <Info label="Height" value={`${height} M`} />
          </div>
          {/* Pokemon Types */}
          <div className={styles.row}>
            {types.map(t => <PokemonType type={t} key={t} />)}
          </div>
        </div>
      </div>
      <div className={classnames(styles.container)}>
        <div className={styles.section}>
          <h2>Abilities</h2>
          <ul className={styles.abilities}>
            {abilities.map(a => <li key={a}>{a}</li>)}
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Stats</h2>
          <ul className={styles.stats}>
            {stats.map(({ name, base }) => (
              <li key={name}>
                <Stat name={name} base={base} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
