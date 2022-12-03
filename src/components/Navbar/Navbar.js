import '../Navbar/Navbar.css'
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
      <>
      <div className='row justify-content-center align-items-center'>
        <div className='col-12 col-sm-12 col-md-4 col-lg-2 text-center text-lg-end'>
          <Link to='/'>
            <button className='img-btn-box'>
              <div className='img-icon-box'>
                <img className='img-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="icon"/>
              </div>
            </button>
          </Link>
        </div>
        <div className='col-12 col-sm-12 col-md-5 col-lg-4'>
          <nav className="flex sm:justify-center space-x-10 items-center ">
          {[
            ['Home', '/'],
            ['Personajes', '/personajes'],
            ['Serie', '/series'],
            ['Trailers', '/projects'],
          ].map(([title, url], index) => (
            <a key={index} href={url} className=" text-sm rounded-lg text-white">{title}</a>
          ))}
          <CartWidget/>
          </nav>
        </div>
      </div>
      </>
    )
}
