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


	