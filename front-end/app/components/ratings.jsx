import React, {Component} from 'react';
import { GoThumbsdown, GoThumbsup } from "react-icons/go";
 const Rating =({ratings})=> {

        return (<div className="rated-text">
            <div className="rated-company-header">Rated Companies</div>
            {ratings.map(rating=>(<div className="text-style-1 mt-2  border border-top-0 border-left-0 border-right-0" 
            key={rating.id}
            ><img className="mr-2 mb-2" src={rating.logo} height='auto' width={40}/>{rating.name}  {rating.vote? <GoThumbsup />:<GoThumbsdown />}</div>))}
            {ratings.length ==0 && <div>You Haven't rated any companies yet</div>}
        </div>)
    }



export default Rating