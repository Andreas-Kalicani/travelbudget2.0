import React, {useState} from 'react';
import './team.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Card3 ({ name,job,about}) {
   
    return (
        <div className='Card'>
            <div className= 'upper-container'>
                <div className= 'img-container'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8k6gAP4V6O20oEcHvwnNFBq9R9vx4MB8pQ&usqp=CAU" alt='' height='100px' width='100px' />
                </div>
            </div>
            <div className='lower-container'>
                <h3> { name } </h3>
                <h4> { job } </h4>
                <p> Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
                <button>Visit profile</button>
                <div className='social-container'>
                <a href='https://www.linkedin.com/in/azhar-arshad-01006ba0/'
                    className= 'linkedin Social'>
                        
                        <LinkedInIcon  />
                        </a>

                    <a href='https://github.com/Axhar85'
                    className= 'github Social'>
                        
                        
                        <GitHubIcon />

                    </a>
                </div>
            </div>

        </div>
    )
}

export default Card3;