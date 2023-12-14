import React from 'react'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'


const Footer = () => {
                    return (
                                        <footer>

                                                            <div className="left">
                                                                                <span className='scootlogo'>scoot</span>
                                                                                <a href="#">About</a>
                                                                                <a href="#">Location</a>
                                                                                <a href="#">Careers</a>
                                                            </div>

                                                            <div className='right'>
                                                                                <img src={instagram} alt="instagram" />
                                                                                <img src={twitter} alt="twitter" />
                                                                                <img src={facebook} alt="facebook" />
                                                            </div>

                                        </footer>
                    )
}

export default Footer