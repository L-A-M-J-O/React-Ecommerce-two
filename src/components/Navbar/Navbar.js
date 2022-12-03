import '../Navbar/Navbar.css'
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
    return (
      <>
      <div className='row align-items-center'>
        <div className='col-12 col-sm-12 col-md-5 col-lg-3 text-center p-2'>
          <button className='img-btn-box'>
            <div className='img-icon-box'>
              <img className='img-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png" alt="icon"/>
            </div>
          </button>
        </div>
        <div className='col-12 col-sm-12 col-md-5 col-lg-7'>
          <nav className="flex sm:justify-start space-x-4 items-center ">
          {[
            ['Home', '/'],
            ['Personajes', '/personajes'],
            ['Serie', '/series'],
            ['Trailers', '/projects'],
          ].map(([title, url], index) => (
            <a key={index} href={url} className="rounded-lg px-4 font-medium hover:bg-slate-100">{title}</a>
          ))}
          <CartWidget/>
          </nav>
        </div>
      </div>
      </>
    )
}
