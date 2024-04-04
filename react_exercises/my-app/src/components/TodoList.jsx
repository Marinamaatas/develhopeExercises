import { useState } from "react"

export default function TodoList() {
  const [data, setData] = useState({
    activity: ''
  });
  const [toDo, setToDo] = useState([]);

  function handleNewActivity(event) {
    setData({
      ...data,
      activity: event.target.value
    });
  }

  function handleLogin(event) {
    event.preventDefault(); 
    setToDo([...toDo, { id: Date.now(), name: data.activity }]);
    setData({ ...data, activity: '' }); 
  }
  function handleResetButton(){
    setToDo([])
}
function handleRemoveActivity(id) {
    setToDo(toDo.filter(item => item.id !== id)); 
  }
  return (
    <div>
      <form onSubmit={handleLogin}>
        <h3>Include an activity in your To Do List!</h3>
        <input name="activity" value={data.activity} onChange={handleNewActivity} />
        <button type="submit">Submit!</button>
        <button onClick={handleResetButton}>Reset</button>
      </form>

      <ul>
        {toDo.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => handleRemoveActivity(item.id)}>Remove activity</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
