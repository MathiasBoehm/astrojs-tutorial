import { useState } from "react";

const DataComponent = () => {

    const [persons, setPersons] = useState([]);

    const handleClick = async () => {
        const res = await fetch('/endpoint.json');
        const data = await res.json();
        setPersons(data);
    };

    return <div>
        <h2>I am a React componment</h2>
        <p>Press Button to read person data ...</p>
        {
            persons.length > 0 && persons.map(p => <p>{p.name}</p>)
        }
        <button onClick={handleClick}>Get Persons</button>
    </div>
}

export default DataComponent;