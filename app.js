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

const Card= ()=>{
    return (
        <div className="card">
            <img alt="res-image" className="card-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMakWahGD-YlPQJ_7vuuALnNiDQl6TmO2X9j4QfSkjptpnYr69UE4r49E&s" />
            <h3>Name</h3>
            <h3>Cusine</h3>
            <h3>Rating</h3>
            <h3>Avg order delivery time</h3>
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
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
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