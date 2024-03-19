import React from 'react';
import ReactDOM from 'react-dom';

//stateless functional component
//always return jsx
//react fragment

function Greeting() {
    return 
    <React.fragment>
        <Person />
    <h4>This is my massage</h4>;
    </React.fragment>
}

//let root = ReactDOM.createoot(document.getElementById('root'));
//root.render(<Greeting />);
//ReactDOM.render(<Greeting />, document.getElementById('root'));

//nested components

    const Person = () => {
        return  <h2>kal kook</h2>;
    }

ReactDOM.render(<Greeting />, document.getElementById('root')); 


function Greeting() {
    return 
    <React.fragment>
        <Person />
    <h4>This is my massage</h4>;
    </React.fragment>
}

//let root = ReactDOM.createoot(document.getElementById('root'));
//root.render(<Greeting />);
//ReactDOM.render(<Greeting />, document.getElementById('root'));

//nested components

    const Person = () => {
        return  <h2>kal kook</h2>;
    }

ReactDOM.render(<Greeting />, document.getElementById('root')); 