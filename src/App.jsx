  // useState used to triger re-render and apply changes 
  // useState used to keep values between renders while re-render trigered
  //  

import React, {useState, useEffect, useRef, useReducer} from 'react';
import {data} from '../data';

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
      <div></div>
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
    AA\*/
   // useState with Array implementation
      /* const [people, setPeople] = useState(data);

        const removeItem = (id) => {
          setPeople(
            people.filter((person) => person.id !== id)
          );
        };

        return (
        <div></div>
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
     /*
     const [person, setPerson] = useState({
      name: 'kook',
      age: 24,
      message: 'hello baby'
     });

     const handleMessage = () => {
      setPerson({...person,message: 'hello kal'});
     };

     return (
      <div></div>
        <h2>{person.name}</h2>
        <h2>{person.age}</h2>
        <h2>{person.message}</h2>
        <button onClick={handleMessage}>Change Message</button>
      </>
     );
    */

      /*
     // useState counter example
      const [value, setValue] = useState(0);

      const increaseHandler = () => {
        setValue((value) => value +=1);
      };
      const decreaseHandler = () => {
        setValue((value) => value -=1);
      };
      const resetHandler = () =>  setValue(0);
      const complexIncrease = () => {
        setTimeout(() => {
          //setValue(value + 1)
          setValue((value) => value + 1);
        }, 2000 );
      };

      return (
        <div></div>
          <section style={{ margin: '5px 0'}}>
            <h2>regular counter</h2>
            <h1>{value}</h1>
          </section>
          <button onClick={increaseHandler}>Increase</button>
          <button onClick={decreaseHandler}>Decrease</button>
          <button onClick={resetHandler}>Reset</button>

          <section>
            <h1>More Complex Counter</h1>
            <h1>{value}</h1>
          </section>
          <button onClick={complexIncrease}>Increase Later</button>
        </>
      );
      */

      /*
        // UseEffect Basics
        const [value, setValue] = useState(0);
        useEffect(()=>{
          if (value > 3) {
          document.title = `new doc(${value})`;
          }
        },[value]);
        
        return (
          <div></div>
            <section>
              <h2>{value}</h2>
            </section>
            <button onClick={()=>setValue(value + 1)}>Inccrease</button>
          </>
        );
        
        //useEffect cleanup
        const [size, setSize] = useState(window.innerWidth);
         const checkSize = () => {
            setSize(window.innerWidth);
        };

        useEffect(() => {
          window.addEventListener('resize',checkSize);
          return () => {
            //for every rerender the useEffect will run an checkSize will be invoked
            //results to a memory leak that ecah time the eventListener added as the system get bigger and side EventListeners added
            //we need clean-up function 
            window.removeEventListener('resize',checkSize);
          }
        }); 

        return (
          <div></div>
          <section>
            <h1>Window</h1>
            <h2>{size} PX</h2>
          </section>
          </>
        );
        

        //additional useState and useEffect implementation
        const url = 'https://api.github.com/users';
        const [users, setUsers] = useState([]);

        const getUsers = async() => {
          const response = await fetch(url);
          const users = await response.json();
          setUsers(users);
        };

        useEffect(() => {
          // it's not possible to make a useEffect function async and await
          //dependency array added to only run on onrtime rerender
          getUsers();
        }, []);

        return (
          <div></div>
          <h1>GitHub Users</h1>
          <section> 
            <ul>
              {users.map((users) => {
                const {id, login, avatar_url, html_url} = users;
                return (
                  <li key={id}>
                    <img src={avatar_url} alt={login} />
                    <div>
                      <h4>{login}</h4>
                      <a href={html_url}>Profile</a>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
          </>
        );

        // conditional rendering implementation
        const url = 'https://api.github.com/users/QuincyLarsons';
        const [isLoading, setIsLoading] = useState(true);
        const [isError, setIsError] = useState(false);
        const [user, setUser] = useState('Default User');

        useEffect(() => {
          fetch(url)
          .then((resp) =>{
            if(resp.status >= 200 && resp.status <= 299) {
              return resp.json();
            } else {
              setIsLoading(false);
              setIsError(true);
              throw new Error(resp.statusText);
            }
          })
          .then((user) => {
            const {login} = user;
            setUser(login);
            setIsLoading(false);
          })
          .catch((error) => console.log(error))
        }, []);

        if (isLoading) {
          return (
            <h1>Loading...</h1>
          );
        }
        
        if(isError) {
          return (
            <h1>Error</h1>
          );
        }

          return (
            <h1>{user}</h1>
          );
        
       
          // we need to use short-circuit or ternary operator bcoz if statesment doesnt return value
          //short-circuit implementation  
          // short-circuit evaluation
          //ternary operator
          const [text, setText] = useState('');
          const firstValue = text || 'hello world';
          const secondValue = text && 'hello world';
          const [isError, setIsError] = useState(false);

          return (
            <div style={{align:'center',marginLeft:'15%'}}>
             <h1>{firstValue}</h1>
            <h1>value: {secondValue}</h1>
          

          <h1>{text || 'hey kook'}</h1>

          // making daynamic the switch evaluation
          <button style={{color:'white',border:'10px',backgroundColor:'lightGreen',margin:'10px',}} onClick={()=> setIsError(!isError)}>Toggle Error</button>
          {isError && <h1>Mr.Bug</h1>
            // implementing using ternary operator
            } 
          {isError ? <h1>This is Mr.Bug</h1> : 
          <div>
            <h1>Mr.Bug Missed :)</h1>
            </div>}
          </div>
          );
      
            // setting up clean-up function while implementing short circuit
            // show/hide 
            
            const [show, setShow] = useState(false);

            return(
              <div style={{alignment:'center', marginLeft:'13%',}}>
              <button style={{boder:'10px',borderColor:'grey', backgroundColor:'lightGreen'}} onClick={()=>setShow(!show)}>
                show/hide
                </button>
                {show && <Item />}
              </div>

            );
            const Item = () => {

              const [size, setSize] = useState(window.innerWidth);
          
              const checkSize = () => {
                setSize(window.innerWidth);
              };
              // to avoid the memory lak bside the useEffect dependency empty array use clean-function
              useEffect(()=>{
                window.addEventListener('resize',checkSize);
                return () => {
                  window.removeEventListener('resize', checkSize);
                };
              }, []);
          
                return(
                  <>
                  <h1>Window</h1>
                  <h1>Size : {size}</h1>
                  </>
                );
            
                }
                

                // basic react forms
                // controlled inputs  
                // using useState  

                const [firstName, setFirstName] = useState('');
                const [email, setEmail] = useState('');

                //list-out the input values 

                const[people, setPeople] = useState([]);

                const handleSubmit = (e) => {
                  e.preventDefault();

                  if (firstName && email) {
                    const person = {id: new Date().getTime.toString(), firstName: firstName, email: email};
                    setPeople((people)=>{
                      return ( [...people, person] );
                    });
                    setFirstName('');
                    setEmail('');
                  }
                  else {
                    console.log("fill the form");
                  }
                };


                return (
                  <>
                    <article style={{align:'center',marginLeft:'25%'}}>
                      <form className="form" onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="firstName">Name</label>
                          <input type="text" id="firstName" name="firstName" value={firstName}  onChange={(v)=>{setFirstName(v.target.value)}}/>
                        </div>
                        <div>
                          <label htmlFor="email">Email</label>
                          <input type="text" id="email" name="emal" value={email} onChange={(v)=>{setEmail(v.target.value)}}/>
                        </div >
                          <button type="submit">Add Person</button>
                      </form>
                        {people.map((person)=>{
                            const {id, firstName, email} = person;
                            return (
                              <div key={id}>
                                <div>
                                <label>Name</label>
                                <input  value={firstName}/>
                                </div>
                              <div>
                                <label>Email</label>
                                <input value={email}/>
                              </div>
                              </div>
                            );
                        })}
                    </article>
                  </>
                );
                

               // react-form with multiple-inputs and single change-handler
               //with a dynamic single input onChange handler
                        // const [firstName, setFirstName] = useState('');
                        // const [email, setEmail] = useState('');
                        const [person, setPerson] = useState([{ firstName: '', email: '', age: '', }]);
                        const [people, setPeople] = useState([]);

                        const handlePerson = (e) => {
                          const name = e.target.name;
                          const value = e.target.value;
                          setPerson({...person, [name]: value});

                        };

                        const handleSubmit = (e) => {
                          e.preventDefault();
                          if (person.firstName && person.email && person.age){
                            const newPerson = {...person, id: new Date().getTime().toString() };
                            setPeople([...people, newPerson]);
                            setPerson({firstName:'', email:'', age:''});
                          }

                        };

                        return (
                          <>
                            <form >
                              <article style={{body:'center', marginLeft:'25%'}}>
                                <div>
                                  <label>Name</label>
                                  <input type='text' htmlFor='firsName' id='fname' name='firstName'  value={person.firstName} onChange={handlePerson} />
                                </div>
                                <div>
                                  <label>Email</label>
                                  <input type='email' htmlFor='email' id='email' name='email' value={person.email} onChange={handlePerson} />
                                </div>
                                <div>
                                  <label>Age</label>
                                  <input type='number' htmlFor='age' id='age' name='age' value={person.age} onChange={handlePerson} />
                                </div>
                                <div>
                                  <button type='submit' style={{margin:'10px', float:'right'}} onClick={handleSubmit}> Add Person</button>
                                </div>
                              </article>
                                {people.map((person)=>{
                                  const {id, firstName, email, age} = person;

                                  return (
                                    <article className='row md-3' style={{marginLeft:'25%'}}>
                                    <div key={id} >
                                      <input className='col auto' type='text' value={firstName} disabled/>
                                      <input  className='col auto' type='text' value={email} disabled />
                                      <input className='col auto' type='number' value={age} disabled />
                                      <hr/>
                                    </div>
                                    </article>
                                  );
                                })}
                            </form>
                          </>
                        );


                       // useRef is a lot like useState hook
                       // it preserves a value
                       // doesn't triger re-render and doesn't need a dependency array while using with useEffect
                       // target the DOM node/element

                       const refContainer = useRef(null);

                       const handleSubmit = (e) => {
                        e.preventDefault();
                        console.log(refContainer.current.value);

                       };

                       useEffect(()=>{
                        console.log(refContainer.current);
                        refContainer.current.focus();
                       });

                       return (
                        <>
                          <form style={{marginLeft:"25%"}} onSubmit={handleSubmit}>
                            <input type='text' ref={refContainer} name='firstName' id='fname'/>
                            <button type='submit' >Submit</button>
                          </form>
                        </>
                       );
                    */

                       // useReducer is another use-case management hook
                       // useReducer used for complex state management and to structure use state

                      // useReducer helps to structure and manage states
                      // uses dispatch function to change states, and 
                      //reducer function recieves the old state and spit-out the new state
                      // when we dispacth the state we get the new state 
                      
                      // reducer have to always return state
                       const reducer = (state, action) => {
                          if (action.target == setName) {
                            return {...state, people: data, isModalOpen: true, modalContent: 'Dont give anyone a false validation unless you admit it'};
                          }
                       };

                       const defaultState = {
                          people: [],
                          isModalOpen: false,
                          modalContent: '',
                       };

                       const [state, dispatch] = useReducer(reducer, defaultState);
                       const [name, setName] = useState('');

                        const handleSubmit = (e) => {
                          e.preventDefault();

                          if(name) {
                            dispatch({target: setName});
                          }
                          else {
                          }
                        };

                        const modal = (modalContent) => {

                          return (
                            <article style={{marginLeft:'25%'}}>
                              <h1>{modalContent}</h1>
                            </article>
                          );
                        };

                        return(
                          <>
                          {state.isModalOpen && modal(state.modalContent)} 
                            <form style={{marginleft:'25%'}} onSubmit={handleSubmit}>
                            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} />
                              <button type='submit'>Add Person</button>
                            </form>
                            {state.people.map((person)=>{
                              return(
                                <div key={person.id}>
                                  <h1>{person.name}</h1>
                                </div>
                              );

                            })};
                          </>
                        );

};
  
export default App;

/*
dont rest untill you made it
today i didnt do anything but still head-up
we gonr keep doing it for tommorow
 */