import {useNoteData} from '../../context/data-context';
import {PinnedNotes} from './PinnedNotes';
import {OtherNots} from './OtherNotes'

export const  RenderNote = ()  => {
    const {note : notes} = useNoteData();
    const pinnedNotes = notes.filter((note ) => note.isPinned === true)
    const otherNotes = notes.filter((note) => note.isPinned !== true)
    if(notes.length <= 0){
        return(
            <div>Notes Added will show Here</div>
        )
    }
    else if(pinnedNotes.length <=0){
        return(
            <div>
                {notes.map(({id,title,description}) => (
                    <div key={id}>
                        <div>{title}</div>
                        <div>{description}</div>
                    </div>
                ))}
            </div>
        )
    }
    return(
        <div>
            <PinnedNotes pinnedNotes={pinnedNotes}/>
            <OtherNots otherNotes={otherNotes} />
        </div>
    )
}