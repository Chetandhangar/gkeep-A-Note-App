import {useNoteData} from '../../context/data-context'
import {Dropdown,Modal,ModalHeader,ModalBody,DropdownItem,DropdownToggle,DropdownMenu, Form,FormGroup,Col,Button,Input} from 'reactstrap'
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPalette, faThumbtack} from '@fortawesome/free-solid-svg-icons';
import './note.css'
export const Note = () => {
    
    const[dropdownOpen , setDropdownOpen] = useState(false)
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
        
    function handleTitleChange(event){
        setTitle(event.target.value)
    }
    function handleDescriptionChange(event){
        setDescription(event.target.value)
    }

    function handlePinnedNote(){
        setPinned(!pinned)
    }


    function handleAddNote(){
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

    const toggle = () => setDropdownOpen(!dropdownOpen)
    const toggelModal = () => setModalOpen(!modalOpen)

    const  handleDropdownLabel = labelname => {
        setSelectedLabel(labelname)
    }
    const handleSelectedColor = color =>{
        setSelectedColor(color)
        setModalOpen(!modalOpen)
    }

    console.log(selectedColor)

        return(
            <div className="note-form">
            <Form style={{backgroundColor : `${selectedColor}`}}>
                {console.log(selectedColor,'from render')}
                 <FormGroup row> 
                        <Col sm={4}>
                        <Input 
                        style={{backgroundColor: "transparent", border:"none", color:"white"}}
                             value={title}
                             placeholder="Title"
                             onChange={handleTitleChange}
                        />
                        </Col>
                        <Col sm={1}>
                         <Button style={{backgroundColor: "transparent",border:"none"}}
                         onClick={() => handlePinnedNote()}
                         >
                         {pinned ? <FontAwesomeIcon icon={faThumbtack} color="red"/> : <FontAwesomeIcon icon={faThumbtack}/>}
                        </Button> 
                        </Col>
                    </FormGroup>
                    <FormGroup row> 
                        <Col sm={6}>
                        <Input 
                            style={{backgroundColor: "transparent", border:"none",color:"white"}}
                            type="textarea"
                             value={description}
                             placeholder="Description"
                             onChange={handleDescriptionChange}
                        />{" "}
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={2}>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} > 
                            <DropdownToggle caret style={{backgroundColor: "transparent",border:"none"}}>
                                {selectedLabel ? selectedLabel : "Add Label"}
                            </DropdownToggle>
                            <DropdownMenu>
                               {labels.map((label) => (
                                   <DropdownItem key={label.id}
                                   onClick={() => handleDropdownLabel(label.labelname)}
                                   >{label.labelname}</DropdownItem>
                               ))}
                            </DropdownMenu>
                        </Dropdown>
                        </Col>
                        <Col sm={2}>
                            <Button
                            style={{backgroundColor: "transparent",border:"none"}}
                            onClick={() =>  toggelModal()}
                            ><FontAwesomeIcon icon={faPalette}/>
                            </Button>
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
                        </Col>
                        <Col sm={2}>
                        <Button 
                            style={{backgroundColor: "transparent", border:"none"}}
                            onClick={() => handleAddNote()}>
                            Add Note
                        </Button>
                        </Col>
                    </FormGroup>
            </Form>
            </div>  
        )
}
