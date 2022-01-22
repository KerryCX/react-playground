import {GetDataPromiseClass, GetStarWarsDataAA, GetStarWarsDataAARevise} from "./GetDataAA";

export const StarWars = () => {
    return(
        <section>
            <GetDataPromiseClass/>
            <GetStarWarsDataAA/>
            <GetStarWarsDataAARevise/>
        </section>
    );
}
