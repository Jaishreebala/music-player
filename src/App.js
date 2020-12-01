import React, { useState, useRef } from 'react';
import Song from "./components/Song";
import Player from "./components/Player";
import Library from './components/Library';
import Nav from './components/Nav';
import "./styles/app.scss";
import data from './data';
import { library } from '@fortawesome/fontawesome-svg-core';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentsong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLibraryOpen, setIsLibraryOpen] = useState(false);
  const audioRef = useRef(null);

  return (
    <div className="App">
      <Nav isLibraryOpen={isLibraryOpen} setIsLibraryOpen={setIsLibraryOpen} />
      <Song currentSong={currentSong} />
      <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} />
      <Library isLibraryOpen={isLibraryOpen} songs={songs} setSongs={setSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} setCurrentsong={setCurrentsong} audioRef={audioRef} />
    </div>
  );
}

export default App;
