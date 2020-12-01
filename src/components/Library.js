import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import LibrarySong from './LibrarySong';

function Library({ isLibraryOpen, isPlaying, setIsPlaying, audioRef, songs, setSongs, setCurrentsong }) {
    return (
        <div className={`library ${isLibraryOpen ? 'library-open' : ''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map(song => <LibrarySong isPlaying={isPlaying} setIsPlaying={setIsPlaying} setCurrentsong={setCurrentsong} audioRef={audioRef} song={song} songs={songs} setSongs={setSongs} key={song.id} />)}
            </div>
        </div>
    )
}

export default Library
