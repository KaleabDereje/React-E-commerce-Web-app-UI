  // useState used to triger re-render and apply changes 
  // useState used to keep values between renders while re-render trigered
  //  

import React, {useState, useEffect} from 'react';
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
    AA\*/
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
      <>
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
        <>
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
          <>
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
          <>
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
          <>
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
        */
       
          //short-circuit implementation


  };

export default App;
/*
//###################################
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
  
 
    //short-circuit implementation


  //short-circuit implementation

conditional rendering implementation
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

conditional rendering implementation
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
  
conditional rendering implementation
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
 
conditional rendering implementation
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
conditional rendering implementation
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
conditional rendering implementation
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
conditional rendering implementation
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
conditional rendering implementation
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
conditional rendering implementation
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
*/
