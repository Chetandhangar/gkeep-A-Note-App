import {useState} from 'react'
import {useNoteData} from '../../context/data-context';
import './label.css'
import {Button, Modal, ModalBody, ModalHeader,Input} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight, faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'



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

    return(
        <div className="label-container">
            <div >
            <FontAwesomeIcon className="label-link-icon" icon={faAngleDoubleRight} color="white"  />
            <Link className="label-link" to="/">NOTE</Link>
            </div>
       
                {labels.map(({id,labelname}) =>(
                    <div key={id} className="label-details">
                        <FontAwesomeIcon icon={faAngleDoubleRight} color="white"  />
                        <Link 
                        className="label-link"
                        to={`/label/${id}`}
                        >
                        {labelname}
                        </Link>
                    </div>
                ))}
             <Button 
             className="btn-label-add"
             onClick={() => toggel()}
             ><FontAwesomeIcon icon={faPencilAlt} color="white" />
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
    )
}
