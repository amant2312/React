import React from "react";
import ReactDOM from "react-dom/client";
/*
Header 
    logo
    nav items


Body
    search
    card

Footer

*/

const cardData= [{
    "ID":1,
    "name": "Rest A",
    "cuisines": "X Y Z",
    "rating": 4.2,
    "avgTime": 34,
},
{
    "ID":2,
    "name": "Rest B",
    "cuisines": "X Y Z",
    "rating": 4.2,
    "avgTime": 90,
},
{
    "ID":3,
    "name": "Rest C",
    "cuisines": "X Y Z",
    "rating": 4.2,
    "avgTime": 30,
},
{
    "ID":4,
    "name": "Rest D",
    "cuisines": "X Y Z",
    "rating": 4.2,
    "avgTime": 14,
}];

const Card= (props)=>{
    const {card}= props;
    console.log(card);
    return (
        <div className="card">
            <img alt="res-image" className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMakWahGD-YlPQJ_7vuuALnNiDQl6TmO2X9j4QfSkjptpnYr69UE4r49E&s" />
            <h3>{card.name}</h3>
            <h3>{card.cuisines}</h3>
            <h3>{card.rating}</h3>
            <h3>{card.avgTime}</h3>
        </div>
    );
}

const Header= ()=>{ 
    return (
    <div className='header'>
        <div className= "logo-container">
            <img className="logo" src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg" />
        </div>
        <div className= "nav-items">
            <ul >
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
        
    </div>
    );
}

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


const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>

    );
}

const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);