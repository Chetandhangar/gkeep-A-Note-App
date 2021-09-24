import {Card,CardBody,CardTitle,CardText, Button,Col} from 'reactstrap'
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
            <div style={{marginTop : "2rem" ,textAlign : "center"}}>Notes Added will show Here</div>
        )
    }
    else if(pinnedNotes.length <=0){
        return(
            <div className="pinned-note-details">
                {note.map((note) => (
                      <div key={note.id}className="note-card-details">
                      <Card className="note-card" style={{backgroundColor : `${note.notecolor}`}}>
                          <CardBody>
                              <div className="row">
                              <CardTitle className="col">{note.title}</CardTitle>
                              <Button 
                              className="col"
                              onClick={() => HandlePinnedNote(note.id)}
                              >
                              {note.isPinned ? <FontAwesomeIcon icon={faThumbtack} color="red"/> : <FontAwesomeIcon icon={faThumbtack} color="black"/>}
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
        )
    }
    return(
        <div>
            <PinnedNotes pinnedNotes={pinnedNotes}/>
            <OtherNots otherNotes={otherNotes} />
        </div>
    )
}