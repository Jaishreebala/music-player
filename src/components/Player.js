import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStepForward, faStepBackward, faPause } from '@fortawesome/free-solid-svg-icons'

const Player = ({ songs, audioRef, currentSong, setCurrentsong, isPlaying, setIsPlaying }) => {
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
    const skipSongHandler = async (direction) => {
        let songIndex = songs.findIndex((song) => { return song.active === true })
        songs[songIndex].active = false;
        if (direction === 'back') {
            if (songIndex === 0) {
                songIndex = songs.length - 1;
            }
            else
                songIndex--;
        }
        else {
            if (songIndex === songs.length - 1)
                songIndex = 0;
            else
                songIndex++;

        }
        songs[songIndex].active = true;
        setCurrentsong(songs[songIndex]);
        if (isPlaying) {
            await audioRef.current.load();
            audioRef.current.play();
        }
    }
    return (
        <div className="player">
            <div className="time-control">
                <p>{formatTime(songTime.currentTime)}</p>
                <div className="track" style={{ background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})` }}>
                    <input min={0} max={songTime.duration || 0} value={songTime.currentTime} onChange={dragTimeHandler} onClick={dragTimeHandler} type="range" />
                    <div className="animate-track" style={{
                        transform: `translateX(${
                            (songTime.currentTime / songTime.duration) * 100
                            }%)`,
                    }}></div>
                </div>
                <p>{songTime.duration ? formatTime(songTime.duration) : '0:00'}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon icon={faStepBackward} onClick={() => skipSongHandler("back")} className="back" size="2x" />
                <FontAwesomeIcon onClick={playPauseHandler} icon={isPlaying ? faPause : faPlay} className="play" size="2x" />
                <FontAwesomeIcon icon={faStepForward} onClick={() => skipSongHandler("next")} className="next" size="2x" />
            </div>
            <audio onLoadedMetadata={songTimeHandler} onEnded={() => skipSongHandler("next")} onTimeUpdate={songTimeHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
};

export default Player;