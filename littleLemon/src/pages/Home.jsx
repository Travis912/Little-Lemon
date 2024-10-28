
import Special from "../components/specials"
import Nav from "./Nav"
import '../App.css'
import { Link } from 'react-router-dom'
import Footer from "../components/Footer"

// images
import bruchetta from '../icons_assets/bruchetta.svg'
import salad from '../icons_assets/greek salad.jpg'
import lemonCake from '../icons_assets/lemon dessert.jpg'
import heroImg from '../icons_assets/restauranfood.jpg'


export default function Home() {

  return (
    <>
      <Nav></Nav>
      <div>

        <main className="intro-section-container">
          <div className="intro-section-content center">
            <section className="intro-text-container">
              <h3 className="title">Little Lemon</h3>
              <h5 className="chicago">Chicago</h5>
              <p className="descriptive-text">We are a family owned Mediterranean resturaunt, focused on traditional recipes served with a modern twist.</p>
              <Link to='./booking'><button>Reserve a Table</button></Link>
            </section>
            <img className='intro-img' src={heroImg} alt='food'></img>
          </div>
        </main>

        <section className='specials-section center'>
          <div className="special-title-container">
              <h3 className="sub-title">This weeks specials!</h3>
              <button>Online Menu</button>
          </div>
          <div className="specials-container">
            <Special 
              title='Greek Salad'
              price="$12.99"
              description="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
              imgSrc={salad}
              imgAlt="Greek Salad"
                ></Special>
                <Special 
              title='Bruchetta'
              price="$5.99"
              description="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil"
              imgSrc={bruchetta}
              imgAlt="Bruschetta"
                ></Special>
                <Special 
              title='Lemon Desert'
              price="$5.00"
              description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined."
              imgSrc={lemonCake}
              imgAlt="lemon cake"
                ></Special>
              </div>
        </section>

      </div>

      <Footer>
      </Footer>
    </>
  )
}