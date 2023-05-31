import Image from 'next/image';

import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Image
        src="/pokedex.svg"
        height={72}
        width={178}
        alt="buttons"
      />
      <h1>
        Let&apos;s learn our Pokémon
      </h1>
    </div>
  );
}