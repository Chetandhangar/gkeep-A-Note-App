import {useNoteData} from '../../context/data-context'
const NewLable = () => {
const{labels , setLabels} = useNoteData()
console.log(labels)
return(
    <div>
        {labels}
    </div>
)
}