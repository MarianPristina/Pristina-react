import React, { useState, useRef } from 'react';
import './Tamil.css'; 
import { BsFillPlayCircleFill, BsFillPauseCircleFill } from 'react-icons/bs';
import { AiFillInstagram, AiFillMail } from 'react-icons/ai';
import { FaTwitter, FaFacebook } from 'react-icons/fa'; 
import { Link } from 'react-router-dom';


const Mal = () => {
    const [selectedSong, setSelectedSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const songs = [
        { title: 'titli', album: 'Chennai Express', duration: '3:57', src: 'tit.mp3', image: 'chennai.jpg' },
        { title: 'nanowale ne', album: 'Padmavat', duration: '4:41', src: 'nai.mp3', image: 'pad.jpg' },
        { title: 'Heeriye', album: 'Heeriye', duration: '5:30', src: 'heeriye.mp3', image: 'heer.jpg' },
        { title: 'Husn', album: 'Husn', duration: '2:38', src: 'Hu.mp3', image: 'husn.jpg' },
        { title: 'yimmy yimmy', album: 'Yimmy Yimmy', duration: '4:08', src: 'yummy.mp3', image: 'yim.jpg' },
       
    ];

    const handlePlayPause = () => {
        if (!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
        setIsPlaying(!isPlaying);
    };

    const handleSongSelect = (song) => {
        setSelectedSong(song);
        setIsPlaying(true);

        if (audioRef.current) {
            audioRef.current.pause(); 
            audioRef.current.src = song.src;
            audioRef.current.load(); 
    
            audioRef.current.addEventListener('canplaythrough', () => {
                
                audioRef.current.play();
            });
        }
    };

    return (
        <>
            <div className="nav-container">
            <Link to ="/Home">
                    <img src="homebutton.jpeg" alt="Home" />
                   <b>HOME</b></Link>
                
                <a href="#" style={{ paddingTop: "10px" }}>
                    <img src="services.jpeg" alt="Services" />
                    <b>SERVIC</b>
                </a>
                <Link to ="/Home" className='back'><b>GO BACK</b></Link>
                <p className='hello'><b>SUGAR RUSH</b></p>
                
                <div className="social-icons">
                
                    <div className="social-icon">
                        <AiFillMail size={30} />
                        <span>Mail</span>
                    </div>
                    
                    <div className="social-icon">
                        <button className="instagram-btn">
                            <AiFillInstagram size={30} />
                        </button>
                        <span>Instagram</span>
                    </div>
                  
                    <div className="social-icon">
                        <FaTwitter size={30} />
                        <span>Twitter</span>
                    </div>
                    
                    <div className="social-icon">
                        <FaFacebook size={30} />
                        <span>Facebook</span>
                    </div>
                </div>
                <p className='pris'>This is the music platform <br />.You can download free<br /> music and enjoy your time</p>
            </div>
            <div className="joe">
                <img src="IMPO.jpeg" id="impo-img" alt="Sugar Rush" />
                <p id="rushing"><b>SUGAR RUSH</b></p>
            </div>

            <div className="music-player">
                <div className="playlist-container">
                    <div className="playlist-header">
                        <h1>HINDI SONGS</h1>
                    </div>
                    <div className="playlist-songs">
                        <ol>
                            {songs.map((song, index) => (
                                <li key={index} className="song-item" onClick={() => handleSongSelect(song)}>
                                    <div className="song-details">
                                        <span className="song-title">{song.title}</span>
                                        <span className="song-album">{song.album}</span>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>

                <div className="play-container">
                    <h2 className="now-playing">Now Playing</h2>
                    {selectedSong && (
                        <img src={selectedSong.image} alt="Tamil Songs" className="album-cover" />
                    )}

                    <div className="song-controls">
                        {selectedSong && (
                            <button className='pro' onClick={handlePlayPause}>
                                {isPlaying ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
                            </button>
                        )}
                    </div>
                    {selectedSong && (
                        <div className="song-details">
                            <p>Song Title: <span className="current-title">{selectedSong.title}</span></p>
                            <p>Album: <span className="current-album">{selectedSong.album}</span></p>
                        </div>
                    )}
                    
                </div>

                {selectedSong && (
                    <audio ref={audioRef} src={selectedSong.src}></audio>
                )}
            </div>
        </>
    );
};

export default Mal;
