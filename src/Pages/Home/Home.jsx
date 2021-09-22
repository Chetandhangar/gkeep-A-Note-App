import {Note} from '../../components/Note/Note'
import {RenderNote} from '..';
import {RenderLabel} from '../Label/label'


export const Home = () => {
    return(
        <div>
            <div className="row">
            <div className="col-3">
            <RenderLabel />
            </div>
            <div className="col-6">
            <Note />
            <RenderNote />  
            </div>

            </div>
             
        </div>
    )
}