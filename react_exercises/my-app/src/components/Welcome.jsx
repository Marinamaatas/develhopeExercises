

import { Age } from "./Age";

export function Welcome({name, age}){ //me lo marca en rojo porque no le indico el tipo de dato que le estoy pasando
    return <div className="welcome">
    <p>Welcome, {name}!</p>
    
    {age > 18 && <Age age={age} />}
    {age && <Age age={age} />}
    {(age > 18 && age < 65) && <Age age={age} />}
    {(age > 18 && age < 65) && name ==="John" && <Age age={age} />}
    {age > 18 ? <Age age={age} /> : <p>You are too young</p>}
    </div>
}

