import {GetData} from './GetData.jsx';
import './Activities.css';
import {GetActivitiesAA, GetActivitiesPuttoScreen} from "./GetDataAA";

export const Activities = () => {
    return(
        <div className="activities-container">
        <div className='activities-grid-container'>
            <GetData/>
            <GetActivitiesAA/>
            <GetActivitiesPuttoScreen/>
        </div></div>
    );
}