import {useState} from 'react'
import {useNoteData} from '../../context/data-context';
import './label.css'
import {Button, Modal, ModalBody, ModalHeader,Input} from 'reactstrap'
import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {Home} from '@material-ui/icons'
import {List , ListItem, ListItemIcon,ListItemText} from '@material-ui/core';
import LabelIcon from '@material-ui/icons/Label';
import CreateIcon from '@material-ui/icons/Create';


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
    },
    paper: {
        marginTop: theme.spacing(4),
        alignItems: 'center',
      },
  }));



export const RenderLabel = () =>{
    const [labelModal , setLabelModal] = useState(false)
    const [labelInput ,setLabelInput] = useState("")
    const {labels, setLabels} = useNoteData()

    const toggel = () => setLabelModal(!labelModal)
    const handelLabelInputChange = event => setLabelInput(event.target.value)
    const addLabel = () => {
        setLabels([...labels , {
            id : labels.length + 1,
            labelname : labelInput
        }])
        setLabelModal(!labelModal)
        setLabelInput("")
    }
    const classes = useStyles();

    return(
        <div className={classes.paper}>
        <div className={classes.root}>
        <List component="nav" aria-label="main labels">
        <Link to="/" className="bg-light text-dark">
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Note" />
        </ListItem>
        </Link>
        {labels?.map(({id,labelname}) =>(
           <>
            <Link to={`/label/${id}`} className="bg-light text-dark">
                <ListItem button>
                    <ListItemIcon>
                        <LabelIcon />
                    </ListItemIcon>
                    <ListItemText primary={labelname}/>
                </ListItem>
            </Link>
           </> 
        ))}
        <ListItem button>
            <ListItemIcon  onClick={() => toggel()}>
                <CreateIcon/>
            </ListItemIcon>
            <ListItemText primary="Create Label"  onClick={() => toggel()}/>
        </ListItem>
        </List>
        <Modal isOpen={labelModal} toggle={toggel}>
                <ModalHeader>Add Label</ModalHeader>
                <ModalBody>
                    <Input 
                    value={labelInput}
                    onChange={handelLabelInputChange}
                    placeholder="label"
                    />
                    <Button 
                    className="btn-label-modal"
                    onClick={() => addLabel()}>
                        Add
                    </Button>
                </ModalBody>
             </Modal>
        </div>
        </div>
    )
}

/*
 <div className="label-container">
            <div style={{marginTop : "2rem"}}>
            <FontAwesomeIcon className="label-link-icon" icon={faAngleDoubleRight} />
            <Link className="label-link" to="/" style={{marginBottom : "0.2rem"}}>NOTE</Link>
            </div>
       
                {labels.map(({id,labelname}) =>(
                    <div key={id} className="label-details">
                        <FontAwesomeIcon icon={faAngleDoubleRight}  />
                        <Link 
                        className="label-link"
                        to={`/label/${id}`}
                        >
                        {labelname}
                        </Link>
                    </div>
                ))}
             <Button 
             onClick={() => toggel()}
             ><FontAwesomeIcon icon={faPencilAlt} />
             <strong className="btn-label-add-text">Add Label</strong>
             </Button>
             
             <Modal isOpen={labelModal} toggle={toggel}>
                <ModalHeader>Add Label</ModalHeader>
                <ModalBody>
                    <Input 
                    value={labelInput}
                    onChange={handelLabelInputChange}
                    placeholder="label"
                    />
                    <Button 
                    className="btn-label-modal"
                    onClick={() => addLabel()}>
                        Add
                    </Button>
                </ModalBody>
             </Modal>
        </div>
*/