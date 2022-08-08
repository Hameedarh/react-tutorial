import React from 'react'
import './Body.css';
import Button from '../Button/Button';

function Body(){
    return(
        <div className='cen'>
           <div>
            <h1>Make <br/> remote work</h1>
            <p>
                Get your team in sync, no matter your location. <br/>
                Streamline processes, create team rituals, and <br/>
                watch productivity soar. 
            </p>
            <Button/>
           </div>
        </div>
    )
}
export default Body;