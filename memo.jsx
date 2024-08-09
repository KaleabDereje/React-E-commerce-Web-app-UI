/*
	  // useState used to triger re-render and apply changes 
  // useState used to keep values between renders while re-render trigered
  //  

import React, {useState, useEffect, useRef, useReducer, useContext} from 'react';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from '../home';
import People from '../people';
import About from '../about';
import Memo from '../memo';
import Person from '../person';
import {data} from '../data';



// const PersonContext = React.createContext();
// has two components : provider, consumer(during prop drilling i used consumer) 
// personContext Wraps-up all components or application

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

                       // useReducer is another use-case management hook
                       // useReducer used for complex state management and to structure use state

                      // useReducer helps to structure and manage states
                      // uses dispatch function to change states, and 
                      //reducer function recieves the old state and spit-out the new state
                      // when we dispacth the state we get the new state 
                      
                      // reducer have to always return state
                       const reducer = (state, action) => {
                          if (action.target == 'TITLE') {
                            const newPeople = [...state.people, action.payload];

                            return {
                              ...state, 
                              people: newPeople, 
                              isModalOpen: true, 
                              modalContent: 'Dont give anyone a false validation unless you admit it'
                            };
                          }
                          if(action.target == 'NONE') {
                            return {
                              ...state,
                              isModalOpen: true,
                              modalContent: 'please fill the input',
                            }
                          }
                          if (action.target == 'CLOSE_MODAL') {
                            return {
                              ...state,
                              isModalOpen: false,
                              modalContent: 'please fill the input',
                            }
                          }
                          throw new Error('no matching action type');
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
                            const listItem = {id: new Date().getTime().toString(), name};

                            dispatch({target: 'TITLE', payload: listItem});
                            setName('');
                          }
                          else {
                            dispatch({target: 'NONE'})
                          }
                        };

                        const closeModal = () => {
                          dispatch({target: 'CLOSE_MODAL'});
                        };

                        return(
                          <>
                          {state.isModalOpen && <Modal modalContent= {state.modalContent} closeModal={closeModal} /> } 
                            <form style={{marginleft:'25%'}} onSubmit={handleSubmit}>
                            <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}} />
                              <button type='submit'>Add Person</button>
                            </form>      
                            {state.people.map((person)=>{
                              return (
                                <div key={person.id}>
                                  <h1>{person.name}</h1>
                                </div>
                              );

                            })};
                          </>
                        );
                      
                     
                        //prop drilling
                        //used while using a biger component and passing a state value using 
                        //the big component and all the way through the bottom component tree
                        //useContext hook can fix this
                        // and using Context API too~

                        const [people, setPeople] = useState(data);

                        const removeItem = (id) => {
                          setPeople((people) => {
                            return people.filter((person)=>{person.id !== id});
                          });
                        };

                         return (
                          <>
                            <h3>Prop Drilling</h3>
                            <List people={people}  removeItem={removeItem} />
                          </>
                         );
                      };

                        const List = ({people, removeItem}) => {
                          return (
                          <section>
                          {people.map((person) => {
                            return <SinglePerson key={person.id} {...person} removeItem={removeItem} />;
                          })}
                          </section>
                          );
                        };

                        const SinglePerson = ({id, name, removeItem}) => {
                          return (
                            <div key = {id}>
                              <h3>{name}</h3>
                              <button onClick={()=>removeItem(id)} >Remove</button>
                            </div>
                          );
                        };
                      
                     //prop drilling
                        //used while using a biger component and passing a state value using 
                        //the big component and all the way through the bottom component tree
                        //useContext hook can fix this
                        // and using Context API too~
                        //implement useContext hook


                        const [people, setPeople] = useState(data);

                        const removeItem = (id) => {
                          setPeople((people)=>{
                            return(
                              people.filter((person)=>{
                                person.id !== id;
                              })
                            );
                          });
                        }

                        //all components or the whole app is wraps-up in personContext.Provider

                        return (
                          <PersonContext.Provider value={{removeItem, people}}>
                              <h4>useContext Hook</h4>
                              <List />
                          </PersonContext.Provider>
                        );
                    

                        const List = () => {
                          const mainData = useContext(PersonContext);
                          return (
                            <>
                            {mainData.people.map((person)=>{
                                return (
                                  <SetPerson  id={person.id}  {...person} />
                                );
                            })}
                            </>
                          );
                        }

                          const SetPerson = ({id, name}) => { 
                            const {removeItem} = useContext(PersonContext)

                            return (
                              <div key={id}>
                                <h1>{name}</h1>
                                <button onClick={()=>removeItem(id)}>Delete</button>
                              </div>   



                              setTimeout(() => console.log('hello world'), 500 )  //setTimeout() is asynchroneous function

                              //Promises
                              let fifteen = Promise.resolve(15);
                              fifteen.value((value) => console.log(`Get${value}`)); // Get 15

                              //Promise implementing with constructor
                                const textFile = (fileName) => {

                                  return new Promise( resolve => {
                                    readTextFile(fileName, text => resolve(text) )
                                  } )
                                }

                                textFile('plans.txt').then(console.log());

                                //implementing chain of promises (then is a method to register a function and by itself it returns a promisse)
                                //cahin of then calls
                                let randomFile = (listFile) {

                                    return textFile(listFile)
                                           .then(content => content.trim().split('\n'))
                                           .then(ls => ls[Math.floor(Math.Random() * ls.length)])
                                           .then(fileName => textFile(fileNmae))

                                }  //only the last then returns a promise which makes the whole program asynchronous at the end

                                let jsonFile = (fileName) => {

                                    return textFile(fileName).then(JSON.parse);
                                }

                                jsonFile('package.json').then(console.log);

                                //failure 
                                //using asynchronous programming, errors may not repotred properly 
                                //use a handler for the funcion in the callback first argument

                                SomeAsyncFunction((error, value) => {
                                    if (error) handleError(error);
                                    else processValue(value);
                                }) ;

                                //passing a reject handler to the promise consetructor as a second argument

                                const textFile = (fileName) => {

                                  return new Promise((resove, reject) => {
                                    readTextFile(fileName, (text, error) => {
                                      if (error) reject(error);
                                      else resolve(text);
                                    })
                                  })
                                }

                                //catch method rejisters rejection handlers or function just like then(register resolve va;ue handlers)

                                new Promise((_, rejection) => rejection(new Error('opps fail')))
                                    .then(value => console.log('it's resolved value only'))
                                    .catch(reject => {
                                        console.log('caught failure' + reject);
                                        return 'resolves reject value';
                                    })
                                      .then(value => console.log('handler 3:' + value));
                                      
                                      //caught failure Error: opps fail
                                      //handler 3: resolves reject value
                                      // /the first then handler doesnt called and the last then method recieves the caught handler value

                                    // we can easily make asynchronous function putting async literal in front of the function
                                    // and use await key word in the function to make it a promise 
                                    // generator function are the same as the asyn function but dont use promises
                                    // the generator function and async function freze at part of the code till the promise resolved and returned
                                    // event loop helps to not make the program idle while the callbacks and the async function main script run to complete
                                    //  event loop runs qued events and the proggramm still run and waits the other scripts
                                    // js generator functions represent by function* and it returns iterable
                                    



                                    
                                    );
                          }
                          

                          return (
                            <Router>
                              < Memo />
                              <Routes>
                                <Route exact path='/' element={<Home />} />
                                <Route exact path='/people' element={<People />} />
                                <Route exact path='/person/:id' element={<Person />} />
                                <Route exact path='*' element={<About />} />
                                </Routes> 
                            </Router>
                                    );

                                            // using exported module 
        var http = require('http');
        var dt = require('./myfirstmodule');

        http.createServer(function(res, req) {
            res.writeHead(200, {'content-Type': 'text/html'});
            res.write('the date and time are currently: ' + dt.myDateTime());
            res.end();
        }).listen(8080);

        //query string using 'url' node.js module

        var http = require('http');
        var url = require('url');

        http.createServer(function(res, req) {
            res.writeHeader(200, {'content-Type': 'text/html'});
            var q = url.parse(req.url, true).query;

            var txt = q.year + " " + q.month;
            res.end(txt);
        }).listen(8080);

        //node.js as file server and working on file systems 
        //use 'fs' node.js module

        var http = require('http');
        var fs = require('fs');

        http.createServer(function(res, req) {
            //open file on the server and return its contnent
            fs.readFile('demoFile.html', function(err, data){
                res.writeHead(200, {"content-Type": "text/html"});
                res.write(data);
                return res.end(err);
            });
        }).listen(8080);

        //fs module has three methods to create a new file on the server

        var http = require('http');
        var fs = require('fs');

        http.createServer(function(res, req){
            //fs.appenFile() method add a content to existing file else create new with the file name
            fs.appendFile('demoFile.html', 'hello baby contnent',function(err){
                if (err) throw err;
                console.log('updated!');
            });
        }).listen(8080);

        //fs.open() method takes 'w' as flag and open file to write and edit else create file
        http.createServer(function(res, req) {
            fs.open('demoFile.html', 'w', 'hello baby contnet', function(err, file){
                if (err) throw err;
                console.log('file dited');
            });
        }).listen(8080);

        //fs.writeFile method open file and overWrites with new content else create a file with the content

        http.createServer(function(res, req){
            fs.writeFile('demoFile.html', 'overWriten content', function(err){
                if (err) throw err;
                console.log(overWriten file);
            });
        }).listen(8080);

        //fs module uses fs.appendFile() and fs.writeFile() methods to update files

        //fs module uses fs.unlink() method to delete a file in the server

        http.createServer(functio(res,req){
            fs.unlink('demoFile.html', function(err){
                if (err) throw err;
                console.log("file removed");
            });
        }).listen(8080);

        //fs module uses fs.rename() method module to rename  a file in the serve

        http.createServer(function(res, req){
            fs.rename('demofile.html', 'newFiel.html', function(err){
                if (err) throw err;
                console.log('renamed file');
            });
        }).listen(8080);

        //fs module uses fs.upload() method to upload file into the server

        //split a web address into a t=readable parts:
         
        var url = require('url');
        var adress = 'http://localhost:8080/default.htm?year=2017&month=february';
        var adr = url.parse(address, true);

        console.log(adr.host);
        console.log(adr.pathname);
        console.log(adr.search);
         var data = q.query;
         console.log(data.month);

         var http = require('http');
         var url = require('url');
         var fs = require('fs');

         http.createServer(function(res, req){
            var adr = url.parse(req.url, true);
            var fileName = "." + adr.pathname;

            fs.readFile(fileName, function(err, data){
                if (err) {
                    res.writeHead(404, {"content-Type": "text/html"});
                    res.end("404 not found");
                }

                res.writeHead(200, {"content-Type": "text/html"});
                res.write(data);
                return res.end();
            });
         }).listen(8080);

         //node.js 'events' module to add ahd handle event objects
         
         var events = require('ebvents');
         // every event is instance of EventEmiiter object

         var events = require("events");
         var newEvent = new EventEmitter();

         //add event handler
         var eventHandler = function() {
            console.log('scream');
         };

         //add event handler to the event
         newEvent.on('scream', eventHandler);
         
         //fire event
         newEvent.emit('scream');

         //node mongo db connection using mongo module

         var mongodb = require('mogodb').MongoClient;
         var url = 'mongodb://localhost:27017/';

         mongodb.connect(url, function(err, db){
            if (err) throw err;
            var dbo = db.db('mydb');
            var query = {address: /S/}
            dbo.collection('customers').findMany(query).limit(5).toArray(function(err, result){
                if(err) throw err;
                console.log(result)
                db.close();
            });
         });

         //join mongodb
         var mongodb = require('mongodb').MongoClient;
         var url = 'mongodb://localhost:27017';

         mongodb.connect(url, function(err, db){
            if(err) throw err;
            var dbo = db.db('mydb');

            dbo.collection('order').aggregate([
                {$lookup: {
                    from: 'products',
                    localField: 'product_id',
                    forignField: '_id',
                    as: 'orderdetails'
                }}
            ]).toArray(function(err, result){
                if(err) throw err;
                console.log(JSON.stringify(result))
                db.close();
            });
         });

        }; 

        
export default App;

/*
##
*/
