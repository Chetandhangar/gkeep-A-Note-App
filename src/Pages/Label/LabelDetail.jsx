import {useParams} from 'react-router-dom'
import {useNoteData} from '../../context/data-context'
import {makeStyles} from '@material-ui/core/styles'
import {RenderLabel} from './label' ;
import {Container , Grid, Card ,CardActions,CardContent ,IconButton,CardHeader
     ,Typography} from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbtack , faTrash} from '@fortawesome/free-solid-svg-icons';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: "red",
    },
  }));

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
    const classes = useStyles();
    

    return(
        <div className="row">
            <div className="col-2">
                <RenderLabel />
            </div>
           <div className="col-10" style={{ marginTop : "2rem"}}>
           <Container>
           <Grid container spacing={3}>
            {noteWithLabel?.length <= 0 && <p>No Note with This Label</p>}
            {noteWithLabel.map(({id,title,description,isPinned,notecolor,label}) =>(
               <Grid item key={id} xs={12} sm={6} md={4}>
                      <Card className={classes.root} style={{backgroundColor : `${notecolor}`}}>
                      <CardHeader
                        action={
                        <IconButton 
                        onClick = {() => HandlePinnedNote(id)}
                        aria-label="settings">
                            {isPinned ? <FontAwesomeIcon icon={faThumbtack} color="red"/> : <FontAwesomeIcon icon={faThumbtack}/>}
                        </IconButton>
                        }
                        title={title}
                        subheader = {label}
                    />
                      <CardContent>
                    <Typography>{description}</Typography>
                      </CardContent>
                      <CardActions disableSpacing>
                      <IconButton aria-label="delete-note">
                      <FontAwesomeIcon 
                        onClick={() => HandleDelteNote(id)}
                        icon={faTrash} color="red" className="btn-delete"/>
                        </IconButton> 
                      </CardActions>
                      </Card>
               </Grid> 
            ))}
           </Grid>
           </Container>
           </div>
        </div>
    )
}