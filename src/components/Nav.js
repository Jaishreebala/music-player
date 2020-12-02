import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons'

function Nav({ isLibraryOpen, setIsLibraryOpen }) {
    const libraryToggleHandler = () => { console.log(isLibraryOpen); setIsLibraryOpen(!isLibraryOpen) };
    return (
        <div className="nav-section">
            <h1>LofiZone</h1>
            <button onClick={libraryToggleHandler}>
                Library
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </div>
    )
}

export default Nav
