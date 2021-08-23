import {useNoteData} from '../../context/data-context'
import {Dropdown,Modal,ModalHeader,ModalBody,DropdownItem,DropdownToggle,DropdownMenu, Form,FormGroup,Col,Button,Input,Label} from 'reactstrap'
import {useState} from 'react'

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
         selectedColor ,  setSelectedColor
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
                 label : selectedLabel
                }]
                );

        setTitle("")
        setDescription("")
    }

    console.log(note)

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
            <div>
            <Form style={{backgroundColor : `${selectedColor}`}}>
                 <FormGroup row> 
                        <Col sm={6}>
                        <Input 
                        style={{backgroundColor: "transparent", border:"none"}}
                             value={title}
                             placeholder="Title"
                             onChange={handleTitleChange}
                        />{" "}
                        </Col>
                    </FormGroup>
                    <FormGroup row> 
                        <Col sm={6}>
                        <Input 
                            style={{backgroundColor: "transparent", border:"none",}}
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
                            >Add Background Color
                            </Button>
                            <Modal isOpen={modalOpen} toggle={toggelModal} 
                            
                           
                            
                            >
                                <ModalHeader>Color</ModalHeader>
                                <ModalBody>
                                    {ColorsData.map((color) =>(
                                        <div key={color.id}>
                                            <div onClick={() => handleSelectedColor(color.color)}>{color.color}</div>
                                        </div>
                                    ))}
                                </ModalBody>
                            </Modal>
                        </Col>
                        
                    </FormGroup>
                    <FormGroup>
                    <Button 
                    style={{backgroundColor: "transparent", border:"none"}}
                    onClick={() => handleAddNote()}>
                    Add Note
                    </Button>
                    </FormGroup>
            </Form>
            </div>  
        )
}
/*
* <div>
                        <button onClick={() => handlePinnedNote()}>Pinned</button>
                    </div>
*/