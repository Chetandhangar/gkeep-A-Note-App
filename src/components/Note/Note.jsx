import {useNoteData} from '../../context/data-context'
export const Note = () => {
    const {title ,setTitle ,
         description , setDescription, 
         note,setNote,
         pinned, setPinned,
        } = useNoteData();

    function handleTitleChange(event){
        setTitle(event.target.value)
    }
    function handleDescriptionChange(event){
        setDescription(event.target.value)
    }

    function handlePinnedNote(){
        setPinned(!pinned)
    }


    function handleAddNote(){
        setNote([...note ,
             {
                 id :note.length ,
                 title : title,
                 description : description,
                 isPinned : pinned
                }]
                );

        setTitle("")
        setDescription("")
    }

    console.log(note)

        return(
            <div>
                <div>
                    <div>
                        <input 
                        value={title}
                        placeholder="Title"
                        onChange={handleTitleChange}
                        />
                    </div>
                    <div>
                        <textarea
                        value={description}
                        placeholder="Description"
                        onChange={handleDescriptionChange}
                        />
                    </div>
                    <div>
                        <button onClick={() => handlePinnedNote()}>Pinned</button>
                    </div>
                    <div>
                        <button onClick={() => handleAddNote()}>Add Note</button>
                    </div>
                </div> 
            </div>
        )
}