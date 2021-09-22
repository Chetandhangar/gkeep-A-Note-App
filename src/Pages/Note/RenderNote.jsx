import {Card,CardBody,CardTitle,CardText, Button} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faThumbtack, faTrash} from '@fortawesome/free-solid-svg-icons'
import {useNoteData} from '../../context/data-context';
import {PinnedNotes} from './PinnedNotes';
import {OtherNots} from './OtherNotes'
import './note.css'

export const  RenderNote = ()  => {
    const {note, setNote} = useNoteData();
    const pinnedNotes = note.filter((note ) => note.isPinned === true)
    const otherNotes = note.filter((note) => note.isPinned !== true)

    function HandlePinnedNote(noteId){
        let ind = note.findIndex((note) => note.id === noteId)
        console.log(ind, 'fron pinned com');
        if(ind === -1){
           alert("nothing to pin or unpi")
        }else{
         note[ind].isPinned = !note[ind].isPinned
         setNote([...note]);
        }
     }
    function  HandleDelteNote(noteId){
        const newNote = note.filter((note) => note.id !== noteId)
        setNote(newNote)
    }


    if(note.length <= 0){
        return(
            <div>Notes Added will show Here</div>
        )
    }
    else if(pinnedNotes.length <=0){
        return(
            <div className="note-details">
                {note.map(({id,title,description, isPinned,notecolor}) => (
                    <div key={id}>
                         <Card className="note-card" style={{backgroundColor : `${notecolor}`}}>
                                <CardBody>
                                    <div className="row">
                                    <CardTitle className="col-4">{title}</CardTitle>
                                    <Button  style={{backgroundColor: "transparent",border:"none"}} 
                                    className="col-1"
                                    onClick={() => HandlePinnedNote(id)}
                                    >
                                    {isPinned ? <FontAwesomeIcon icon={faThumbtack} color="red"/> : <FontAwesomeIcon icon={faThumbtack}/>}
                                    </Button> 
                                    </div>
                                    <CardText>{description}</CardText>
                                    <FontAwesomeIcon 
                                    onClick={() => HandleDelteNote(id)}
                                    icon={faTrash} color="red" className="btn-delete"/>
                                </CardBody>
                            </Card>
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