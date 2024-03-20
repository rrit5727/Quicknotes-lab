import {useState, useEffect} from 'react';
import * as notesAPI from '../../../utilities/notes-api'
import NotesList from '../../../components/NotesList/NotesList';
import NoteForm from '../../../components/NoteForm/NoteForm'


const NotesPage = () => {
    const [notes, setNotes] = useState([]);

    async function addNote(note) {
        const newNote = await notesAPI.createNote(note);
        setNotes([...notes, newNote]);
    }

    useEffect(() => {
        notesAPI.getNotes().then((notes) => {
            setNotes(notes)
        });
    }, [])    
    
    

    return (
        <>
            <h1>Notes Page</h1>            
            <NoteForm addNote={addNote}/>
            <NotesList notes={notes} />
        
        
        </>


    )

}

export default NotesPage