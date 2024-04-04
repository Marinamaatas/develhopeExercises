export default  Colors({ colors }) {
    return (
      <ul>
        {colors.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    );
  }
  