import React, {useState} from 'react';
import './team.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



function Card2 ({ name,job,about}) {
   
    return (
        <div className='Card'>
            <div className= 'upper-container'>
                <div className= 'img-container'>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E03AQGeWuqQQ-kDCw/profile-displayphoto-shrink_800_800/0/1620292610495?e=1625702400&v=beta&t=LWgjKMjHAq_x0VrThwUxIjvkxmVEW9B3_9zOYDS-qbM" alt='' height='100px' width='100px' />
                </div>
            </div>
            <div className='lower-container'>
                <h3> { name } </h3>
                <h4> { job } </h4>
                <p> Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
                <button>Visit profile</button>

                <div className='social-container'>
                <a href='https://www.linkedin.com/in/andreas-kalicani-59b980211/'
                    className= 'linkedin Social'>
                        
                        <LinkedInIcon   />
                        </a>

                    <a href='https://github.com/Andreaskalicani'
                    className= 'github Social'>
                        
                        
                        <GitHubIcon />

                    </a>
                
                </div>
            </div>

        </div>
    )
}

export default Card2;