import {Card,CardBody,CardTitle,CardText, Button,Col} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPalette, faThumbtack , faTrash} from '@fortawesome/free-solid-svg-icons'
import {  useNoteData } from "../../context/data-context";

import './note.css'
export const PinnedNotes = ({pinnedNotes}) => {

    const{note ,setNote} = useNoteData()

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
   
    return(
        <div className="pinned-container">
            <div>
                {pinnedNotes.length <= 0 ? (
                    <div></div>
                ):
                <div>
                <h1 className="pinned-header">Pinned</h1>
                <div>
                    <div className="pinned-note-details">
                        {pinnedNotes.map((note) => (
                            <div key={note.id}className="note-card-details">
                            <Card className="note-card" style={{backgroundColor : `${note.notecolor}`}}>
                                <CardBody>
                                    <div className="row">
                                    <CardTitle className="col">{note.title}</CardTitle>
                                    <Button  style={{backgroundColor: "transparent",border:"none"}} 
                                    className="col"
                                    onClick={() => HandlePinnedNote(note.id)}
                                    >
                                    {note.isPinned ? <FontAwesomeIcon icon={faThumbtack} color="red"/> : <FontAwesomeIcon icon={faThumbtack}/>}
                                    </Button> 
                                    </div>
                                    <CardText>{note.description}</CardText>
                                    <div className="row">
                                        <Col >
                                            <CardText>{note.label}</CardText>
                                        </Col>
                                        <Col>
                                        <FontAwesomeIcon 
                                            onClick={() => HandleDelteNote(note.id)}
                                            icon={faTrash} color="red" className="btn-delete"/>
                                        </Col>
                                    </div>
                                </CardBody>
                            </Card>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}