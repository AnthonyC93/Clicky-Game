import React from 'react';
import './style.css';

function infoCard(){
    return(
        <div className="row center-align">
            <div className="col s12">
                <div className='container'>
                    <div className="card-panel purple">
                        <h3 className='white-text card-title'>Clicky Game!</h3>
                        <span className="flow-text white-text">Click on an image to earn points, but don't click on any more than once!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default infoCard;