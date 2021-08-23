import {useNoteData} from '../../context/data-context';

export const  RenderNote = ()  => {
    const {note : notes} = useNoteData();
    return(
        <div>
            <div>
                {notes.map((note) => (
                    <div key={note.id}>
                      <div>{note.title}</div>
                        <div>{note.description}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}