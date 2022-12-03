import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPaperclip} from '@fortawesome/free-solid-svg-icons'
import { faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <>
        <footer className='text-xs text-white'>
            <div className='row justify-content-center p-0 m-0'>
                <div className='col-12 text-center'>
                    <small>&copy; 2022 <b>Alan Mateo Naranjo Alvarado</b></small>
                    <br/>
                    <div className='row justify-center'>
                    <div className='col-auto p-1'>
                        <a href='https://github.com/L-A-M-J-O'>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>
                    <div className='col-auto p-1'>
                        <a href='https://www.linkedin.com/in/alann3009200330092003/'>
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                    <div className='col-auto p-1'>
                        <a href='https://portfolio-alan-naranjo.vercel.app/'>
                            <FontAwesomeIcon icon={faPaperclip} />
                        </a>
                    </div>
                    </div>
                    <br/>
                    <a href='https://www.adultswim.com/'><i>Adult Swim Pagina Original</i></a>
        
                </div>
                <div className='col-12 m-2 text-center'>
                    SIGN UP FOR THE ADULT SWIM NEWSLETTER
                </div>
                <div className='col-12 text-center'>
                    <Link className='ptg' to=''>Privacy Policy</Link>
                    <Link className='ptg' to=''>Ad Choices</Link>
                    <Link className='ptg' to=''>Terms of Use</Link>
                    <Link className='ptg' to=''>Parental Controls</Link>
                    <Link className='ptg' to=''>Closed Captioning</Link>
                    <Link className='ptg' to=''>Contact Us</Link>
                    <Link className='ptg' to=''>Press Room</Link>
                    <Link className='ptg' to=''>Help</Link>
                    <Link className='ptg' to=''>Site Map</Link>
                </div>
                <div className='col-12 text-center'>
                TM & © 2022  Turner Broadcasting System, Inc. All Rights Reserved.
                </div>
                <div className='col-12 text-center'>
                    AdultSwim.com is part of Turner Entertainment Digital which is part of the Turner Sports & Entertainment Digital Network. 
                </div>
                <div className='col-12 text-center'>
                    This project was completed with assistance from the Georgia Film Office, a division of the Georgia Department of Economic Development.
                </div>
            </div>
        </footer>
    </>
  )
}
