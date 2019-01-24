import React, {Component} from 'react';

// const Company = ({name,location,logo,description})=>
// (<Row className="company-container">
//     <Media>
//     <Media.Left>
//     <img src={logo} height='auto' width={100}/>
//     </Media.Left>
//     <Media.Body>
//       <Media.Heading>{name}</Media.Heading>
//       <div>Located in {location}</p>
//       <p>
//       {description}
//       </p>
//     </Media.Body>
//   </Media>
//     </Row>)

const Company = ({name,location,logo,description})=>
(<div className="card-base p-3 d-flex flex-column justify-content-center align-items-center">
  
      <div><img src={logo} height='auto' width={105}/></div>
    
      <div className="name mb-3 mt-3">{name}</div>
      <div className="location text-center mb-3">Located in {location}</div>
      <div className="description mb-3">
      {description}
      </div>
  
    </div>)


export default Company



