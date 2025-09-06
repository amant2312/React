import {logoUrl} from "../utils/static";

const Header= ()=>{ 
    return (
    <div className='header'>
        <div className= "logo-container">
            <img className="logo" src={logoUrl} />
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

export {Header};