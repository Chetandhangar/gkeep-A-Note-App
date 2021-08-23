import {createContext, useContext, useState, useReducer} from 'react'

const NoteContext =  createContext()

export function NoteDataProvider({children}){
        const [title ,setTitle] = useState("")
        const [description , setDescription] = useState("");
        const [note, setNote ] = useState([])
        const [labels ,setLabels] = useState(["TODO, WORK, STUDY"])
        const [pinned , setPinned] = useState(false);
        const [backgroundColor ,setBackgroundColor] = useState("")
    return(
        <NoteContext.Provider value={{title, setTitle, 
        description, setDescription,
        note,setNote, 
        labels, setLabels,
        pinned , setPinned}}>
            {children}
        </NoteContext.Provider>
    )
}

export function useNoteData(){
    return useContext(NoteContext)
}