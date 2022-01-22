import {GetDataPromiseClass, GetStarWarsDataAA} from "./GetDataAA";
import {GetStarWarsData} from "./GridStarWars";

export const StarWars = () => {
    return(
        <section>
            <GetDataPromiseClass />
            <GetStarWarsDataAA />
            <GetStarWarsData />
        </section>
    );
}
