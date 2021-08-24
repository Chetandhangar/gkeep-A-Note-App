import {useNoteData} from '../../context/data-context';

export const RenderLabel = () =>{
    const {labels} = useNoteData()
    return(
        <div>
            <div>
                {labels.map(({id,labelname}) =>(
                    <div key={id}>
                        <h1>{labelname}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}