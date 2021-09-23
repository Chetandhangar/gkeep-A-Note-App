import {useNoteData} from '../../context/data-context'
import {useState} from 'react'
import useStyles from './NoteStyle';
import {Container,Grid,TextField, CssBaseline,Button,IconButton,Menu,MenuItem} from '@material-ui/core';
import {Modal,ModalHeader,ModalBody} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faThumbtack} from '@fortawesome/free-solid-svg-icons';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

import './note.css';


export const Note = () => {
    
    const[modalOpen, setModalOpen] = useState(false)
    const {title ,setTitle ,
         description , setDescription, 
         note,setNote,
         pinned, setPinned,
         labels,
         selectedLabel , setSelectedLabel,
         ColorsData,
         selectedColor ,  setSelectedColor,
        } = useNoteData();
        

    function handlePinnedNote(){
        setPinned(!pinned)
    }


    function handleAddNote(){
        alert(title)
        setNote([...note ,
             {
                 id :note.length ,
                 title : title,
                 description : description,
                 isPinned : pinned,
                 label : selectedLabel,
                 notecolor : selectedColor
                }]
                );

        setTitle("")
        setDescription("")
        setSelectedLabel("")
        setSelectedColor("")
        setPinned(false)
    }

    console.log(selectedColor,"color")


    const toggelModal = () => setModalOpen(!modalOpen)

    const handleSelectedColor = color =>{
        setSelectedColor(color)
        setModalOpen(!modalOpen)
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMenuClose = (labelname) => {
        setSelectedLabel(labelname)
      setAnchorEl(null);
    };
    const classes = useStyles()
    console.log(selectedColor)

        return(
            <Container component="main">
            <CssBaseline />
            <div className={classes.paper}  style={{backgroundColor : `${selectedColor}`}}>
               <Grid  container spacing={2}>
               <Grid item xs={10}>
                        <TextField
                            autoComplete="fname"
                            name="title"
                            variant = "outlined"
                            required
                            fullWidth
                            id="title"
                            label="Title"
                            autoFocus
                            value={title}
                            onChange={(e) => setTitle(title => title = e.target.value)}
                        />
                </Grid>
                <Grid item xs={1}>
                    <Button
                    onClick={() => handlePinnedNote()}
                    >
                    {pinned ? <FontAwesomeIcon icon={faThumbtack} color="red"/> : <FontAwesomeIcon icon={faThumbtack}/>}
                    </Button> 
                </Grid>
                <Grid item xs={12}>
                 <TextField
                            autoComplete="fname"
                            name="description"
                            variant = "outlined"
                            required
                            fullWidth
                            id="description"
                            label="description"
                            autoFocus
                            value={description}
                            onChange={(e) => setDescription(description => description = e.target.value)}
                        />
                </Grid>
                <Grid item xs={4} sm={2}>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleMenuClick}>
                {selectedLabel ? (selectedLabel) : (<CreateRoundedIcon />)}
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                      {labels.map((label) => (
                                   <MenuItem key={label.id}
                                   onClick={() => handleMenuClose(label.labelname)}
                                   >{label.labelname}</MenuItem>
                               ))}
                </Menu>
                </Grid>
                <Grid item xs={2}>
                     <IconButton  onClick={() =>  toggelModal()}>
                     <ColorLensIcon />
                    </IconButton>   
                    <Modal isOpen={modalOpen} toggle={toggelModal}  
                            >
                                <ModalHeader>Color</ModalHeader>
                                <ModalBody>
                                    {ColorsData.map((color) =>(
                                        <div key={color.id}>
                                            <div style={{cursor :"pointer"}} onClick={() => handleSelectedColor(color.color)}>{color.color}</div>
                                        </div>
                                    ))}
                                </ModalBody>
                            </Modal>        
                </Grid>
                <Grid item className={classes.addNote}>
                    <IconButton onClick={() => handleAddNote()}>
                        <AddRoundedIcon />
                    </IconButton>
                </Grid>
               </Grid>
            </div>
            </Container>

        )
}
