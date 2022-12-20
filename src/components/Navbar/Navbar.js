import '../Navbar/Navbar.css'
import CartWidget from "../CartWidget/CartWidget";

export const Navbar = () => {
    return (
      <>
      <div className='content'>
        <div className='row-span-1'>
          <div className='col-12'>
            <nav className="flex sm:justify-center space-x-10 items-center">
              {[
                ['Home', '/'],
                ['Personajes', '/personajes'],
                ['Serie', '/series'],
                ['Trailers', '/projects']
              ].map(([title, url], index) => (  
                <a key={index} href={url} className=" text-xs text-black">{title}</a>
              ))}
              <CartWidget/>
            </nav>
          </div>
        </div>
      </div>
      </>
    )
}
