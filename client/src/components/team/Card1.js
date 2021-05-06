import React  from 'react';
import './team.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function Card1 ({ name,job,about}) {
   
    return (
        <div className='Card'>
            <div className= 'upper-container'>
                <div className= 'img-container'>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGFCuqkmakdrQ/profile-displayphoto-shrink_800_800/0/1605196154976?e=1625702400&v=beta&t=S04PQL8q7m1UigaTGU9DKzrpnbIpgtKmr2K1d9QXBCs" alt='' height='100px' width='100px' />
                    
                </div>
            </div>
            <div className='lower-container'>
                <h3> { name } </h3>
                <h4> { job } </h4>
                <p> Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. </p>
                <button>Visit profile</button>
                <div className='social-container'>
                  
                     <a href='https://www.linkedin.com/in/francisco-javier-gonzalez-505559150/?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACRjkJUB6TmMZ0nhPYMdqlnOafy_u3pxZWU'
                    className= 'linkedin Social'>
                        
                        <LinkedInIcon  />
                        </a>

                    <a href='https://github.com/harvgonzalez'
                    className= 'github Social'>
                        
                        
                        <GitHubIcon />

                    </a>
                
                </div>
            </div>

        </div>
    )
}

export default Card1;