import {useState} from 'react';


function NotesList({notes}) {

    if (notes.length === 0) {
        return <p>No Notes Yet!</p>
    }


    const notesList = notes.map((n) => (               
        <div key={n._id}>
                <p>
                    {n.text}
                    <button></button>
                </p>
        </div>
        ))
        
    return notesList
    

}

export default NotesList