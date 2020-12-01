import React from 'react';
const LibrarySong = ({ isPlaying, setIsPlaying, audioRef, setCurrentsong, song, songs, setSongs }) => {
    const songClickHandler = (e) => {
        songs.map(singleSong => singleSong.active = false);
        song.active = true;
        setCurrentsong(song)
        if (isPlaying) {
            // await audioRef.current.play();
            const playPromise = audioRef.current.play();
            if (playPromise != undefined) {
                playPromise.then((audio) => {
                    audioRef.current.play();
                })
            }
        }
    }
    return (
        <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={songClickHandler}>
            <img src={song.cover} alt={song.name}></img>
            <div className="song-desc">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
};

export default LibrarySong;