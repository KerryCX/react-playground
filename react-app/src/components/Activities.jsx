import {GetData} from './GetData.jsx';
import './Activities.css';
import {GetActivitiesAA, GetActivitiesPutToScreen} from "./GetDataAA";

export const Activities = () => {
    return(
        <div className="activities-container">
            <div className='activities-grid-container'>
                <GetData/>
                <GetActivitiesAA/>
                <GetActivitiesPutToScreen/>
            </div>
        </div>
    );
}