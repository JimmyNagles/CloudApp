import React from "react";



function RecipeCard(props) {
    return (
   
      <div className="col s6 m3 l4 ">
       <div className="card small transparent  ">
        <div className=" card-image grey darken-4" >
        
        <img className="circle " width="200" height="200"  src={props.image}>
        </img>
        
        <span className="card-title red-text darken-4" >{props.id}</span>
        </div>
  
          <div className="card-content">
        <p className="orange-text">{props.title}</p>


          </div>
     
        <div className="card-action">



         <a className="" href={props.link}>recipe</a>
          
          

        </div>


      </div>
      </div>
   
  
    );
  }
  
  export default RecipeCard;
  