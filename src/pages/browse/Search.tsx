import { SyntheticEvent } from 'react';
import styles from '@/styles/Browse.module.css';

export type SearchProps = {
  search: string
  setSearch: Function
}

export default function Search({ search, setSearch }: SearchProps) {
  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => setSearch(value);

  return (
    <div className={styles.search}>
      <input
        id="search"
        name="search"
        value={search}
        onChange={handleChange}
        type="text"
        className={styles.search}
        placeholder="Search"
      />
      {search && (
        <button
          className={styles.reset}
          onClick={() => setSearch('')}
        >
          Reset
        </button>
      )}
    </div>
  );
}