import formatPokemonName from '@/utils/formatPokemonName';

import styles from '@/styles/Pokemon.module.css';

type NameProps = {
  name: string
}

export default function Name({ name }: NameProps) {

  const handleClick = () => {
    var msg = new SpeechSynthesisUtterance();
    msg.text = name;
    window.speechSynthesis.speak(msg);
  };

  return (
    <h2 className={styles.name}>
      <span>{formatPokemonName(name)}</span>
      <button className={styles.button} onClick={handleClick}>
        🔊
      </button>
    </h2>
  );
}