import React from 'react';
import './Styles.css'; 
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="wonders">
                <a href="#">
                    <img src="homebutton.jpeg" alt="Home" />
                    <b>HOME</b>
                </a>
                <a href="#" style={{ paddingTop: "10px" }}>
                    <img src="services.jpeg" alt="Services" />
                    <b>SERVICES</b>
                </a>
            </div>
            <div className="underground">
                <img src="IMPO.jpeg" id="melvin" alt="Sugar Rush" />
                <p id="peter"><b>SUGAR RUSH</b></p>
            </div>
            <div className="malin">
                <nav>
                    <a href="#" className='butter'>TRENDING</a>
                    <a href="#"  className='butter'>AL</a>
                    <a href="#" className='butter'>SINGERS</a>
                </nav>
            </div>
            <p id="babu"><b>TRENDING ON CHARTS</b></p>
            <div className="amali-container">
                <div className="play-wrapper">
<Link to="/Tamil">
                        <img src="TAMILPLAY.jpeg" className="amali" alt="Tamil" />
                        <p className="play-text">TAMIL</p>
                    </Link>
                </div>
                <div className="play-wrapper">
                <Link to="/English">
                        <img src="engplay.jpeg" className="amali" alt="English" />
                        <p className="play-text">ENGLISH</p>
                    </Link>
                </div>
                <div className="play-wrapper">
                <Link to="/Hindi">
                        <img src="hindi.jpeg" className="amali" alt="Hindi" />
                        <p className="play-text">HINDI</p>
                    </Link>
                </div>
                <div className="play-wrapper">
                    <a href="#">
                        <img src="MALYALAM.jpeg" className="amali" alt="Malayalam" />
                        <p className="play-text">MALAYALAM</p>
                    </a>
                </div>
            </div>
            <p id="babu"><b>TRENDING ALBUM</b></p>
            <div className="amali-container">
                <div className="play-wrapper">
                    <a href="#">
                        <img src="remo.jpeg" className="amali" alt="Tamil" />
                    </a>
                </div>
                <div className="play-wrapper">
                    <a href="#">
                        <img src="Starboy.jpeg" className="amali" alt="English" />
                    </a>
                </div>
                <div className="play-wrapper">
                    <a href="#">
                        <img src="aadukalam.jpg" className="amali" alt="Hindi" />
                    </a>
                </div>
                <div className="play-wrapper">
                    <a href="#">
                        <img src="born.jpeg" className="amali" alt="Malayalam" />
                    </a>
                </div>
            </div>
            <p id="babu"><b>TRENDING ARTIST</b></p>
            <div className="amali-container">
                <div className="play-wrapper">
                    <a href="#">
                        <img src="lanathis.png" className="amali" alt="Tamil" />
                    </a>
                </div>
                <div className="play-wrapper">
                    <a href="#">
                        <img src="thissabrina.png" className="amali" alt="English" />
                    </a>
                </div>
                <div className="play-wrapper">
                    <a href="#">
                        <img src="thissid.png" className="amali" alt="Hindi" />
                    </a>
                </div>
                <div className="play-wrapper">
                    <a href="#">
                        <img src="thisone.png" className="amali" alt="Malayalam" />
                    </a>
                </div>
            </div>
           
            <footer className="footer">
                <p>© 2024 Sugar Rush. All rights reserved.</p>
            </footer>
           
        </div>
    );
};

export default Home;
