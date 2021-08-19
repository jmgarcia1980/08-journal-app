import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
// import { Nothingselected } from './Nothingselected'
import { Sidebar } from './Sidebar'

export const JournalScreen = () => {
    return (
        <div className="journal__main-content">
            
            <Sidebar />

            <main>
                {/* <Nothingselected /> */}
                
                <NoteScreen />

            </main>
        </div>
    )
}
