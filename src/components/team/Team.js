import React from "react"; 
import "./team.css"; 


const Team = (props) => {
     
    return(
   <div className="container-box">
   <div className="card name1">
   <img src="./images/javier.png" className="img"/>  
   <h3 className="title" >Web Developer</h3>
   <p className="text">He is the entreprenur of the project, He could sell any Idea to anyone and you would be still amazed. Even your grandmother</p>
   <p className="name-tag">-Javier</p>
 </div>
   <div className="card name2">
   <img src="./images/azhar.png" className="img"/>
   <h3 className="title" >Web Developer</h3>
   <p className="text">He is the entreprenur of the project, He could sell any Idea to anyone and you would be still amazed. Even your grandmother</p>
   <p className="name-tag">-Azhar</p>
   </div>
   <div className="card name3">
   <img src="./images/sergio.png" className="img"/>
   <h3 className="title" >Web Developer</h3>
   <p className="text">He is the entreprenur of the project, He could sell any Idea to anyone and you would be still amazed. Even your grandmother</p>
   <p className="name-tag">-Sergio</p>
   </div>
   <div className="card name4">
   <img src="./images/andreas.jpg" className="img"/>
   <h3 className="title" >Web Developer</h3>
   <p className="text">He is the entreprenur of the project, He could sell any Idea to anyone and you would be still amazed. Even your grandmother</p>
   <p className="name-tag">-Andreas</p>
   </div>
       </div>
    )

}

export default Team; 