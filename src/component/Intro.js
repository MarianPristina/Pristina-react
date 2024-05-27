import React from 'react';
import './Styles.css';  
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div>
      <div id="container">
        <img src="music.jpeg" id="music" alt="Music" />
        <Link to="/Signin" id="signin">SIGN IN</Link>
        <a href="#" id="create">CREATE ACCOUNT</a>
        <div id="head">SUGAR RUSH</div>
        <div id="para">Discover, stream, and share a constantly expanding mix <br/>of music from emerging and major artists around the world.</div>
        <Link to="/Signup" id="signup">SIGN UP FOR FREE</Link>
      </div>

      <p id="trend"><b>TRENDING ARTIST TO EXPLORE</b></p>

      <div className="lover">
          
              <img src="lana.jpeg" className="ann" title="Lana Del Rey, is an American singer-songwriter. Her music is noted for its cinematic quality and exploration of tragic romance, glamour, and melancholia, with frequent references to contemporary pop culture and 1950s–1970s Americana" alt="Lana Del Rey" />
              <img src="logo.jpeg" className="logo" alt="Logo" />
          
      </div>

      <div className="lover">
          
              <img src="taylor.jpeg" className="ann" title="Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. A subject of widespread public interest with a vast fanbase, she has influenced the music industry, popular culture and politics through her songwriting, artistry, entrepreneurship, and advocacy." alt="Taylor Swift" />
              <img src="logo.jpeg" className="logo" alt="Logo" />
          
      </div>

      <div className="lover">
          
              <img src="weekend.jpeg" className="ann" title="Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer-songwriter. He is known for his unconventional music production, artistic reinventions, and signature use of the falsetto register. Tesfaye began releasing music anonymously in 2009. After co-founding the record label XO, he released three mixtapes in 2011, House of Balloons, Thursday, and Echoes of Silence" alt="The Weeknd" />
              <img src="logo.jpeg" className="logo" alt="Logo" />
          
      </div>

      <div className="lover">
         
              <img src="stray kids.jpeg" className="ann" title="Stray Kids is a South Korean boy band formed by JYP Entertainment through the 2017 reality show of the same name. The group is composed of eight members: Bang Chan, Lee Know, Changbin, Hyunjin, Han, Felix, Seungmin, and I.N." alt="Stray Kids" />
              <img src="logo.jpeg" className="logo" alt="Logo" />
          
      </div>

      <div className="lover">
         
              <img src="blackpink.jpeg" className="ann" title="Blackpink is a South Korean girl group formed by YG Entertainment and consisting of members Jisoo, Jennie, Rosé, and Lisa. Cited as the biggest girl group in the world, they are considered the most successful Korean girl group internationally and a leading force in the Korean Wave" alt="Blackpink" />
              <img src="logo.jpeg" className="logo" alt="Logo" />
    
      </div>

      <div className="lover">
          
              <img src="BTS.jpeg" className="ann" title="BTS, also known as the Bangtan Boys, is a South Korean boy band formed in 2010. The band consists of Jin, Suga, J-Hope, RM, Jimin, V, and Jungkook, who co-write or co-produce much of their material." alt="BTS" />
              <img src="logo.jpeg" className="logo" alt="Logo" />
          
      </div>

      <div className="lover">
      
              <img src="SID.jpeg" className="ann" title="Sidharth Sriram is an Indian Carnatic musician, music producer, playback singer. He is an R&B songwriter and has been working in the Tamil, Telugu, Kannada, Malayalam, Hindi, Marathi and English music industry" alt="Sidharth Sriram" />
              <img src="logo.jpeg" className="logo" alt="Logo" />
         
      </div>

      <div className="lover">
      
              <img src="ANIL.jpeg" className="ann" title="Anirudh Ravichander, also credited mononymously as Anirudh, is an Indian music composer and playback singer who works primarily in Tamil Cinema. He has also composed music for few Hindi and Telugu films." alt="Anirudh Ravichander" />
              <img src="logo.jpeg" className="logo" alt="Logo" />
        
      </div>
    </div>
  );
}

export default Intro;
