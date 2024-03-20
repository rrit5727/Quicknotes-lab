import { useState } from "react";

function NoteForm({addNote}) {

    const [newNote, setNewNote] = useState('')

    const _handleSubmit = (e) => {
        e.preventDefault();
        addNote(newNote);
        setNewNote('');


    }

    return(
        <form onSubmit={_handleSubmit}>
            <label htmlFor="">Note</label>
            <textarea id="note" value={newNote} onChange={(e) => setNewNote(e.target.value)} ></textarea>
            <label htmlFor="">Add Note:</label>
            <button id="add">Add note</button>
        </form>

    )

}


export default NoteForm