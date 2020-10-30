import React,{ useState } from 'react';
import '../components/Navbar.css';
import {SiDirectus} from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa';
import {Button} from './Button'
  import {
    Link
  } from "react-router-dom";


function Navbarmain() {
    const [click,setClick]=useState(false);
    const [button, setButton] = useState(true);

    const handleClick=()=> setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
   
    return (
        <>
          <nav className='navbar'>
            <div className='nav-container container'>
                
                <Link to='/' className='navbar-logo'>
                   < SiDirectus className='navbar-icon'/> 
                    MICHEAL SHOP
                </Link>
                <div className='navbar-icon' onClick={handleClick}>
                 {click ?<FaTimes/>:<FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Services</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Products</Link>
                    </li>
                   
                    <li className='nav-item'>
                    {
                     button?(
                         <Link to='/sign-up' className='btn-link'>
                             <Button buttonStyle='btn--outline'>SIGN UP</Button>
                         </Link>
                     ):(
                        <Link to='/sign-up' className='btn-link'>
                            <Button 
                                buttonStyle='btn--outline'
                                buttonSize='btn--mobile'
                                onClick={closeMobileMenu}
                                >
                                SIGN UP
                            </Button>
                        </Link>
                    )
                    }
                    </li>
                </ul>
            </div> 
           </nav>
        </>
    )
}

export default Navbarmain;
