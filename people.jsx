import React, {useState} from 'react';

import {Link} from 'react-router-dom';
import {data} from './data'

const People = () => {
    const [person, setPerson] = useState(data);
    return (
        <>
        <h1>People</h1>
        {person.map((p)=>{
            return (
                <div key={p.id}>
                    <p>{p.name}</p>
                    <Link to='/person/'>Details</Link>
                </div>
            );
        })}
        </>
    );
    
};
   

export default People;