  // useState used to triger re-render and apply changes 
  // useState used to keep values between renders while re-render trigered
  //  

import React, {useState} from 'react';
//import {data} from '../data';

  function App() {

    //const title = 'Advanced React useState Hook';
     //const handleClick = () => {
      //title = "Definetly changing kook's useState";
    /*
      const [title, setTitle] = useState('Advanced React useState Hook');
      const changeTitle = () => {
        if(title === 'Advanced React useState Hook'){
          setTitle("Definetly changing kook's useState");
        }else {
          setTitle('Advanced React useState Hook');
        }
      };

    return(
      <>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <button type='button' onClick={changeTitle} color='Primary'>
          Flex Title
        </button>
      </div>
      </>
    );
    */
   // useState with Array implementation
      /* const [people, setPeople] = useState(data);

        const removeItem = (id) => {
          setPeople(
            people.filter((person) => person.id !== id)
          );
        };

        return (
        <>
        {people.map((person) => {
          const {id, name} = person;
            return (
              <div key={id}>
                <h3>{name}</h3>
                <button onClick={() => removeItem(id)}>Remove Item</button>
              </div>
            );
          })}  
          <button onClick={() => setPeople([])}>
            Clear Items
          </button>
        </>
      );
      */
     //useState implementation with Object
    
  };

export default App;