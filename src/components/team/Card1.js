import React, {useState} from 'react';
import './Card.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Card ({ name,job,about}) {
   
    return (
        <div className='Card'>
            <div className= 'upper-container'>
                <div className= 'img-container'>
                    <img src="https://img2.freepng.es/20180623/iqh/kisspng-computer-icons-avatar-social-media-blog-font-aweso-avatar-icon-5b2e99c40ce333.6524068515297806760528.jpg" alt='' height='100px' width='100px' />
                    
                </div>
            </div>
            <div className='lower-container'>
                <h3> { name } </h3>
                <h4> { job } </h4>
                <p> { about } </p>
                <button>Visit profile</button>
                <div className='social-container'>
                  
                     <a href=''
                    className= 'linkedin Social'>
                        
                        <LinkedInIcon  />
                        </a>

                    <a href=''
                    className= 'github Social'>
                        
                        
                        <GitHubIcon />

                    </a>
                
                </div>
            </div>

        </div>
    )
}

export default Card;