import {createContext, useContext, useState, useReducer} from 'react'
const LABELS = [
 {id:1, labelname : "TODO"},
 {id:2 , labelname : "STUDY"}
]
const COLORS = [
    {
        id : 1,
        color : "black"
    },
    {
        id : 2 ,
        color : "green"
    },
    {
        id :3,
        color : "blue"
    },
    {
        id : 4,
        color : "yellow"
    }
]

const NoteContext =  createContext()

export function NoteDataProvider({children}){
        const [title ,setTitle] = useState("")
        const [description , setDescription] = useState("");
        const [note, setNote ] = useState([])
        const [labels ,setLabels] = useState(LABELS)
        const [pinned , setPinned] = useState(false);
        const [ColorsData ,setColorsData] = useState(COLORS)
        const [selectedColor , setSelectedColor] = useState("")
        const [selectedLabel  , setSelectedLabel] = useState("")
    return(
        <NoteContext.Provider value={{title, setTitle, 
        description, setDescription,
        note,setNote, 
        labels, setLabels,
        pinned , setPinned,
        selectedLabel , setSelectedLabel,
       ColorsData,setColorsData,
        selectedColor,setSelectedColor 
        }}>
            {children}
        </NoteContext.Provider>
    )
}

export function useNoteData(){
    return useContext(NoteContext)
}