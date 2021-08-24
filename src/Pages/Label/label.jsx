import {useNoteData} from '../../context/data-context';
import './label.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'
export const RenderLabel = () =>{
    const {labels} = useNoteData()
    return(
        <div className="label-container">
                {labels.map(({id,labelname}) =>(
                    <div key={id} className="label-details">
                        <FontAwesomeIcon icon={faAngleDoubleRight} color="white"  />
                        <h1 className="label-name">{labelname}</h1>
                    </div>
                ))}
        </div>
    )
}