import {Card} from "./Card";
import cardData from "../utils/data";

const Body= ()=>{
    return (
        <div className="body">
            <h1>search</h1>

        <div className= "res-card">
            {cardData.map((cardRes) => {
                return <Card key= {cardRes.ID} card= {cardRes}/>
            })}
        </div>
        </div>
    );
}

export {Body};