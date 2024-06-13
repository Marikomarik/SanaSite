
import logo from './logo.png';
import './Header.css';
import { useState } from 'react';

export default function Header(){
    const [isOpen11, setOpen11] = useState(false);
    const [isOpen12, setOpen12] = useState(false);
    const [isOpen21, setOpen21] = useState(false);
    const [isOpen22, setOpen22] = useState(false);
    return(
    <header>
        <div className='header'>
            <a href="" className='logo'><img src={logo} alt=""/></a>
            <div className='nav'>
                <ul>
                    <li onMouseEnter={() => setOpen11(true)} onMouseLeave={() => setTimeout(()=> setOpen11(false), 50)}><a href="" className={`Strela  a-int`}>
                        <div onMouseEnter={() => setOpen12(true)} onMouseLeave={() => setOpen12(false)} className={`${isOpen11 || isOpen12 ? "active" : ""} popUpMenu`}>
                            <a>Profile</a>
                            <a>Members</a>
                        </div>
                        Community</a>
                    </li>
                    <li><a href="" className='a-int'>Classifieds</a></li>
                    <li><a href="" className='a-int'>Blog</a></li>
                    <li onMouseEnter={() => setOpen21(true)} onMouseLeave={() => setTimeout(()=> setOpen21(false), 50)}><a href="" className={`Strela  a-int`}>
                        <div onMouseEnter={() => setOpen22(true)} onMouseLeave={() => setOpen22(false)} className={`${isOpen21 || isOpen22 ? "active" : ""} popUpMenu`}>
                            <a>2 Columns</a>
                            <a>3 Columns</a>
                            <a>Single Product</a>
                            <a>Cart</a>
                            <a>Checkout</a>
                        </div>
                        Shop</a>
                    </li>
                </ul>
            </div>
            <div className='div-search'>
                <form method='get' className='search'>
                <input className='search-text' type="text" placeholder='Search'></input>
                <button className='search-button'><img src=""></img></button>
                </form>
            </div>
            <a className='a-int shop'>
                <img src=""></img>
                B
            </a>
        </div>
    </header>
    )
}