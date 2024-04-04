
export default function Color({ color }) {
    return (
      <li key={color.id}>
        <p>{color.name}</p>
      </li>
    );
  }