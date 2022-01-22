import {GetData} from './GetData.jsx';
import './Activities.css';
import {GetActivitiesAA} from "./GetDataAA";

export const Activities = () => {
    return(
        <div className='activities-container'>
            <GetData/>
            <GetActivitiesAA/>
        </div>);
}