import {useParams} from 'react-router-dom'
import {useNoteData} from '../../context/data-context'
import {Card,CardBody,CardTitle,CardText, Button} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbtack , faTrash} from '@fortawesome/free-solid-svg-icons'

export const SelectedLabel = () => {
    const {labels,note, setNote} = useNoteData();
    let {labelId} = useParams();

    let currentlabel = labels.filter((label) => label.id === parseInt(labelId))
    let noteWithLabel = note.filter((note) => note.label === currentlabel[0].labelname)

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
        <div>
           <div>
              {noteWithLabel.map(({id,title,description,isPinned,notecolor}) =>(
                  <Card
                   key={id}
                   className="note-card" 
                   style={{backgroundColor : `${notecolor}`}}
                   >
                     
                      <CardBody>
                            <div className="row">
                                <CardTitle className="col-4">{title}</CardTitle>
                                <Button style={{backgroundColor: "transparent",border:"none"}} 
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
              ))}
           </div>
        </div>
    )
}