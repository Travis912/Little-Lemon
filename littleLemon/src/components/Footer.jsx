import Logo  from '../icons_assets/Logo.svg'

export default function Footer () {
    return (
        <footer className="Footer center">
            <div>
                <img src={Logo} alt='Little Lemon Logo'></img>
                <p>We are a family owned Mediterranean resturaunt, focused on traditional recipes served with a modern twist.</p>
            </div>
            <div>
                <ul className='footer-list'>
                    <h4>Important Links</h4>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Menu</a></li>
                    <li><a href='/'>Reservations</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Login</a></li>
                </ul>
            </div>
            <div>
                <h4>Contact</h4>
                <br></br>
                <h5>Phone Number: </h5>
                <p> 111 - 222 - 999</p>
                <br></br>
                <br></br>
                <h5>Email:</h5>
                <p>LittleLemon@email.com</p>
                <br></br>
                <br></br>
                <h5>Address: </h5>
                <p> 123 Pizza st, Chicago USA </p> <p> K3P 5J6</p>
            </div>
            <div>
                <ul className='footer-list'>
                    <h4>Important Links</h4>
                    <li><a href='/'>Facebook</a></li>
                    <li><a href='/'>Instagram</a></li>
                    <li><a href='/'>X</a></li>
                </ul>
            </div>
        </footer>
    )
}