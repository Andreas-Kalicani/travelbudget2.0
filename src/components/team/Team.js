import React, {useState} from 'react';
import './App.css';
import Card from './Components/Card4'
import Card1 from './Components/Card1'
import Card2 from './Components/Card2'
import Card3 from './Components/Card3'


function Team() {

    
  const [name, setName] = useState ('Your Name');
  const [job, setJob] = useState ('Job Title');
  const [about, setAbout] = useState ('Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

  return (
    <div calssName= 'Team'>
    
    {
      //</div><div className="App">
      //<Card name={'Sergio'} job={job} about={about} />
    }
      <Card name={'Sergio'} job={job} /*about={abou}*/ />
      <Card1 name={"Javier"} job={job} /*about={about}*/ />
      <Card2 name={'Andreas'} job={job} /*about={about}*/ />
      <Card3 name={'Azhar'} job={job} /*about={about}*/ />
     
    </div>
  );
}


export default Team;





/*import React from "react"; 
import "./team.css"

const Team = (props) => {
     
    return(
   <div className="container-box">
   <div className="card name1"></div>
   <div className="card name2"></div>
   <div className="card name3"></div>
   <div className="card name4"></div>
       </div>
    )

}

export default Team; */