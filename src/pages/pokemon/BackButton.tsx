import { useRouter } from 'next/router';

import styles from '@/styles/Pokemon.module.css';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      className={styles.backButton}
    >
      ⬅ Go Back
    </button>
  );
}