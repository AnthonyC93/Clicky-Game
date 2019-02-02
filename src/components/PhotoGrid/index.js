import React from 'react';
import './style.css';

//for i=3 make a row and in each one{ 
    //for each of the 4 pictures{make a column and card panel with an image}
// }

function photoGrid(props){
    return(
        <div className='row'>
            <div className='container'>
                <div className='col s12'>
                    <div className='row'>
                        <div className='col s12 m6 l3 center-align'>
                            <div className='card-panel'><img className="responsive-img" onClick={props.picPressed} src="https://picsum.photos/160/160/?random"/></div>
                        </div>
                        <div className='col s12 m6 l3 center-align'>
                            <div className='card-panel'><img className="responsive-img" onClick={props.picPressed} src="https://picsum.photos/160/160/?random"/></div>
                        </div>
                        <div className='col s12 m6 l3 center-align'>
                            <div className='card-panel'><img className="responsive-img" onClick={props.picPressed} src="https://picsum.photos/160/160/?random"/></div>
                        </div>
                        <div className='col s12 m6 l3 center-align'>
                            <div className='card-panel'><img className="responsive-img" onClick={props.picPressed} src="https://picsum.photos/160/160/?random"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default photoGrid;