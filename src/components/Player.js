import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStepForward, faStepBackward, faPause } from '@fortawesome/free-solid-svg-icons'

const Player = ({ audioRef, currentSong, isPlaying, setIsPlaying }) => {
    const [songTime, setSongTime] = useState({
        currentTime: 0,
        duration: 0
    })
    // Event Handlers
    const playPauseHandler = () => {
        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
        else {
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
    }
    const songTimeHandler = (e) => {
        const obj = { currentTime: e.target.currentTime, duration: e.target.duration };
        setSongTime(obj);
    }
    const formatTime = (time) => {
        return (Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2))
    }
    const dragTimeHandler = (e) => {
        // songTime.currentTime = e.target.value;
        setSongTime({ ...songTime, currentTime: e.target.value });
        audioRef.current.currentTime = songTime.currentTime;
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songTime.currentTime)}</p>
                <input min={0} max={songTime.duration || 0} value={songTime.currentTime} onChange={dragTimeHandler} onClick={dragTimeHandler} type="range" />
                <p>{formatTime(songTime.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon icon={faStepBackward} className="back" size="2x" />
                <FontAwesomeIcon onClick={playPauseHandler} icon={isPlaying ? faPause : faPlay} className="play" size="2x" />
                <FontAwesomeIcon icon={faStepForward} className="next" size="2x" />
            </div>
            <audio onLoadedMetadata={songTimeHandler} onTimeUpdate={songTimeHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
};

export default Player;