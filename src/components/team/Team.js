import React from "react"; 
import "./team.css"; 


const Team = () => {
     
    return(
   <div className="container-box">
   <div className="card name1">
   <img src="./images/javier.png" className="img"/>  
   <h3 className="title" >Web Developer</h3>
   <p className="text">Entreprenur of our team, setting Ideas and getting it into action</p>
   <p className="name-tag">-Javier</p>
 </div>
   <div className="card name2">
   <img src="./images/azhar.png" className="img"/>
   <h3 className="title" >Web Developer</h3>
   <p className="text">He is the creative one and getting the team together</p>
   <p className="name-tag">-Azhar</p>
   </div>
   <div className="card name3">
   <img src="./images/sergio.png" className="img"/>
   <h3 className="title" >Web Developer</h3>
   <p className="text">Techlead of the group and a master of the technical part of this operation. </p>
   <p className="name-tag">-Sergio</p>
   </div>
   <div className="card name4">
   <img src="./images/andreas.jpg" className="img"/>
   <h3 className="title" >Web Developer</h3>
   <p className="text">Developer that works in team, there to support for where it is needed to be in the project.</p>
   <p className="name-tag">-Andreas</p>
   </div>
       </div>
    )

}

export default Team; 