import {Note} from '../../components/Note/Note'
import {RenderNote} from '..'
import {RenderLabel} from '..'


export const Home = () => {
    return(
        <div className="row">
            <div className="col-4">
                <RenderLabel />
            </div>
            <div className="col-8">
                <Note />
                <RenderNote />
            </div>    
        </div>
    )
}