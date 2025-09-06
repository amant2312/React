import {cardImage} from "../utils/static";

const Card= (props)=>{
    const {card}= props;
    console.log(card);
    return (
        <div className="card">
            <img alt="res-image" className="card-image" src={cardImage} />
            <h3>{card.name}</h3>
            <h3>{card.cuisines}</h3>
            <h3>{card.rating}</h3>
            <h3>{card.avgTime}</h3>
        </div>
    );
}
export {Card};