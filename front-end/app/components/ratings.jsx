import React, {Component} from 'react';
import {Glyphicon} from 'react-bootstrap'
 const Rating =({ratings})=> {

        return (<main>
            <h2>Rated Companies</h2>
            {ratings.map(rating=>(<div
            key={rating.id}
            >{rating.name} {rating.vote? <Glyphicon glyph="thumbs-up" />:<Glyphicon glyph="thumbs-down" />}</div>))}
            {ratings.length ==0 && <div>You Haven't rated any companies yet</div>}
        </main>)
    }



export default Rating