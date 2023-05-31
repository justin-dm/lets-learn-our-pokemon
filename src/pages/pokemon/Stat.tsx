type StatProps = {
  name: string,
  base: number,
}

export default function Stat({ name, base }: StatProps) {
  const fieldName = `stat-${name}`;
  return (
    <>
      <label htmlFor={fieldName}>{name}</label>
      <progress id={fieldName} max="100" value={base}>base</progress>
    </>
  );
}