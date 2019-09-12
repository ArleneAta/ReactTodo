import React from 'react';
import {Link} from 'react-router-dom'

function Header(){
    return  (
        <header style={headerSyle}> 
            
            <h1>TodoList</h1>
            <Link style={LinkSyle} to="/"> Home </Link>| <Link style={LinkSyle} to="/about">About</Link>
        </header>
    )
   
}


const headerSyle = {
        background: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px'
}

const LinkSyle ={
    color: '#fff',
    textDecoration: 'none'
}
export default Header;