import {useNoteData} from '../../context/data-context'
import {Card,CardBody,CardTitle,CardText, Button, DropdownItem,DropdownMenu} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPalette, faThumbtack ,faTrash} from '@fortawesome/free-solid-svg-icons'
export const OtherNots = ({otherNotes}) => {
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
        <div className="other-notes-container">
             <div>
                {otherNotes.length <= 0 ? (
                    <div></div>
                  ) : 
                  <div>
                  <h1 className="other-notes-header">Other</h1>

                  <div>
                  {otherNotes.map((note) => (
                      <div key={note.id}>
                       <Card className="note-card" style={{backgroundColor : `${note.notecolor}`}}>
                                <div className="row">
                                <CardTitle className="col-4">{note.title}</CardTitle>
                                <Button  style={{backgroundColor: "transparent",border:"none"}} 
                                className="col-1"
                                onClick={() => HandlePinnedNote(note.id)}
                                >
                                {note.isPinned ? <FontAwesomeIcon icon={faThumbtack} color="red"/> : <FontAwesomeIcon icon={faThumbtack}/>}
                                </Button> 
                                </div>
                                <CardText>{note.description}</CardText>
                                <FontAwesomeIcon 
                                    onClick={() => HandleDelteNote(note.id)}
                                    icon={faTrash} color="red" className="btn-delete"/>
                            </Card>
                      </div>
                  ))}
                  </div>

              </div>
                  }
            </div>
        </div>
    )
}