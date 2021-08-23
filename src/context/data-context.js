import {createContext, useContext, useState, useReducer} from 'react'

const NoteContext =  createContext()

export function NoteDataProvider({children}){
        const [title ,setTitle] = useState("")
        const [description , setDescription] = useState("");
        const [note, setNote ] = useState([])
    return(
        <NoteContext.Provider value={{title, setTitle, description, setDescription,note,setNote}}>
            {children}
        </NoteContext.Provider>
    )
}

export function useNoteData(){
    return useContext(NoteContext)
}