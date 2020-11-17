import React, { useState } from 'react'
import { ChangeEvent } from 'react';

interface NewNoteProps {
    addNote(note: string): any;
}

const NewNotes: React.FC<NewNoteProps> = ({ addNote }) => {
    // 'note' gets the value from the user input:
    const [note, setNote] = useState("");

    // updateNote is a callback that updates the note.. <HTMLInputElement> needs to be specified so 
    //   ChangeEvent knows to change when text is added.
    const updateNote = (event: ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }

    // Another callback function that activates when button is clicked:
    const onAddNoteClick = () => {
        addNote(note);
        setNote("");    // resets the textbox
    }

    return (
        <div>
            <input onChange={updateNote} value={note} type="text" name="note" placeholder="Note" />
            <button onClick={onAddNoteClick}> Add Note</button>
        </div>
    )
}

export default NewNotes
