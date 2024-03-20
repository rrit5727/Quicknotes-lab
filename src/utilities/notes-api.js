import sendRequest from './send-request';
const BASE_URL = '/api/notes';

//all routes defined in the notes router 
//will be prefixed with '/api/notes'

export async function createNote(noteText) {
    return sendRequest(BASE_URL, 'POST', {
        text: noteText
    });
}

export async function getNotes() {
    return sendRequest(BASE_URL)
}