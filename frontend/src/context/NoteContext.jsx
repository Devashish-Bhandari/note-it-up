import {createContext, useReducer} from 'react'

export const NotesContext = createContext();

export const notesReducer = (state, action) => {
    switch(action.type){
        case 'SET_NOTES':
            return{
                notes: action.payload
            }
        case 'CREATE_NOTE':
            return{
                notes: [action.payload, ...state.notes]
            }
        case 'DELETE_NOTE':
            return{
                notes: state.notes.filter( n=> n._id !== action.payload.note._id )
            }
        case 'UPDATE_NOTE':

            const pos= state.notes.findIndex(n=> n._id === action.payload._id );
            // console.log(pos);
            state.notes[pos].isPinned= action.payload.isPinned;
            state.notes[pos].title= action.payload.title;
            state.notes[pos].tagline= action.payload.tagline;
            state.notes[pos].body= action.payload.body;
            return{
                notes: [...state.notes]
            }
        case 'UPDATE_PIN':
            const pos1= state.notes.findIndex(n=> n._id === action.payload._id );
            // console.log(pos1);
            state.notes[pos1].isPinned= action.payload.isPinned;
            return{
                notes: [...state.notes]
            }
        default:
            return state;
        
    }
}

export const NoteContextProvider=  ({children}) => {
    const [state, dispatch] = useReducer(notesReducer, {
        notes: null
    }); 

    return (
        <NotesContext.Provider value={{...state, dispatch}}> 
            {children}
        </NotesContext.Provider>
    )
}