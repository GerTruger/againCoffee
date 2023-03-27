export const key = () => {
  return (
    <ul>
      {Data.map((item) => (
        <li key={item.id}>{item}</li>
      ))}
    </ul>
  );
};
