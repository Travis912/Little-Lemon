import navLogo from '../icons_assets/Logo.svg'
import { useState } from 'react'

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <header>
            <nav className="nav center">
                <img src={navLogo} alt=''></img>
                <ul className="nav-links-container">
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='Booking'>Reservations</a></li>
                    <li><a href='/'>Order online</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </nav>
        </header>
    )
}