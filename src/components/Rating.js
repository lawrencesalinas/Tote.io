import React from 'react'


function Rating(props,color) {
    console.log('rating props',props);
    return (
        <div className='rating'>
            <span>
                <i style = {{color}} className= 'fas fa-star'>
                {props.value} >=1
                     ? ‘fas fa-star’
                        : props.value >=  0.5
                        ? ‘fas fa-star=half-alt’
            
                      : ‘far fa-star’

                </i>

             
            </span>
            
        </div>
    )
}

export default Rating
