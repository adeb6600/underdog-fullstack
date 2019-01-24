import React, {Component} from 'react';
import {Row, Media} from 'react-bootstrap'

// const Company = ({name,location,logo,description})=>
// (<Row className="company-container">
//     <Media>
//     <Media.Left>
//     <img src={logo} height='auto' width={100}/>
//     </Media.Left>
//     <Media.Body>
//       <Media.Heading>{name}</Media.Heading>
//       <p>Located in {location}</p>
//       <p>
//       {description}
//       </p>
//     </Media.Body>
//   </Media>
//     </Row>)

const Company = ({name,location,logo,description})=>
(<Row className="company-container">
    <Media>
    <div className="hanging-image">
    <img src={logo} height='auto' width={80}/>
    </div>
    <Media.Body>
      <Media.Heading>{name}</Media.Heading>
      <p>Located in {location}</p>
      <p>
      {description}
      </p>
    </Media.Body>
  </Media>
    </Row>)


export default Company



