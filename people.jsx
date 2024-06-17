import React, {useState} from 'react';

import {data} from './data'

const People = () => {
    const [person, setPerson] = useState(data);

    const removeItem = (id) => {
            setPerson((person)=>{
                person.filter((p)=>{
                    return (
                        p.id !== id
                    );
                })
            })
    }

    return (
        <>
        <h1>People</h1>
        {person.map((p)=>{
            return (
                <div key={p.id}>
                    <p>{p.name}</p>
                    <span><button onClick={()=>{removeItem(p.id)}}>Delete</button></span>
                </div>
            );
        })}
        </>
    );
    
};
   

export default People;