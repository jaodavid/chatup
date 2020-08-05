import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="homeOuterContainer">
            <div className="homeInnerContainer">
                <h1 className="heading">ChatUp!</h1>
                <div>
                    <input 
                    placeholder="Name" 
                    className="homeInput" 
                    type="text" 
                    onChange={ (event) => setName(event.target.value) } />
                </div>
                <div>
                    <input 
                    placeholder="Room" 
                    className="homeInput mt-20" 
                    type="text" 
                    onChange={ (event) => setRoom(event.target.value) } />
                </div>
                <Link 
                    to={`/chat?name=${name}&room=${room}`}
                    onClick={ event => (!name || !room) ? event.preventDefault() : null }>
                    <button className="button mt-20" type="submit">Chat</button>
                </Link>
            </div>
        </div>
    )
};

export default Home;