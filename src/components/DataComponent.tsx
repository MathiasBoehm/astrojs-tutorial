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
        <p>Press the button to read person data ...</p>
        <button className="mt-8 mb-8 btn btn-neutral" onClick={handleClick}>Get Persons</button>

        {
            persons.length > 0 && persons.map(p => <p>{p.name}</p>)
        }
        

    </div>
}

export default DataComponent;