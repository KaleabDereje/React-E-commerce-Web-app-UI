import React from 'react';
import {useState} from 'react';
import {data} from '../data'

import ReactDOM from 'react-dom';

/*
//stateless functional component
//always return jsx
//react fragment

function Greeting() {
    return 
    <React.fragment>
        <Person />
	<Message />
	<Adresse />
	<Town />
    </React.fragment>
}

//let root = ReactDOM.createoot(document.getElementById('root'));
//root.render(<Greeting />);
//ReactDOM.render(<Greeting />, document.getElementById('root'));

//nested components
//jsx css

 const Person = () => <h2 style={{color='red', backgroundColor='gray',  fontSize='5px', marginTop='3px'}}>
 	kal kook</h2>;
 const Message = () => <h1> This is my message</h1>;
 const Adresse = () => <h4> Addis Ababa </h4>;
 const Town = () => <h4> Bole </h4>;	

ReactDOM.render(<Greeting />, document.getElementById('root')); 

--

import React from 'react';
import ReactDOM from 'react-dom';

//stateless functional component
//always return jsx
//react fragment

function Greeting() {
    return 
    <React.fragment>
        <Person />
	<Message />
	<Adresse />
	<Town />
    </React.fragment>
}

//let root = ReactDOM.createoot(document.getElementById('root'));
//root.render(<Greeting />);
//ReactDOM.render(<Greeting />, document.getElementById('root'));

//nested components
//jsx css

 const Person = () => <h2 style={{color='red', backgroundColor='gray',  fontSize='5px', marginTop='3px'}}>
 	kal kook</h2>;
 const Message = () => <h1> This is my message</h1>;
 const Adresse = () => <h4> Addis Ababa </h4>;
 const Town = () => <h4> Bole </h4>;	

ReactDOM.render(<Greeting />, document.getElementById('root')); 
*/

// useState advanced react-hook
  // useState used to triger re-render and apply changes 
  // useState used to keep values between renders while re-render trigered
  //  
  
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
  
		const {people, setPeople} = useState(data);
		return (
		  <>
			{people.map((person) => {
			  const {id, name} = person;
			  return (
				<div key={id}>
				  <h2>{name}</h2>
				</div>
			  )
			})}
			<button onClick={() => setPeople([])}>
			  Clear Items
			</button>
		  </>
		);
	}
  
  export default App;
=============================================
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
  
		const {people, setPeople} = useState(data);
		return (
		  <>
			{people.map((person) => {
			  const {id, name} = person;
			  return (
				<div key={id}>
				  <h2>{name}</h2>
				</div>
			  )
			})}
			<button onClick={() => setPeople([])}>
			  Clear Items
			</button>
		  </>
		);
	}
  
  export default App;