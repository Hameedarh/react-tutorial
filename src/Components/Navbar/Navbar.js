import React from 'react'
import './Navbar.css';

function Navbar(){
    return(
        <div className='nav'>
            <nav>
                <h3 className='sn'>snap</h3>
                <ul>
                    <li>Features</li> 
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar;