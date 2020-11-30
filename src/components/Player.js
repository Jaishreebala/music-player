import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStepForward, faStepBackward } from '@fortawesome/free-solid-svg-icons'

const Player = () => {
    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon icon={faStepBackward} className="back" size="2x" />
                <FontAwesomeIcon icon={faPlay} className="play" size="2x" />
                <FontAwesomeIcon icon={faStepForward} className="next" size="2x" />
            </div>
        </div>
    )
};

export default Player;