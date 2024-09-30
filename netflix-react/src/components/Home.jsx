import React from 'react'
import play from './photos/play-icon.png'
import info from './photos/info-icon.png'

const Home = () => {
    return (
        <>
            <div className="hero">
                <img src="https://i.hizliresim.com/8cpamvc.jpg" alt="background-banner" className='main-photo' />
                <div className="hero-info">
                    <img width="450px" src="https://occ-0-7375-1490.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTRvxxe6KnvsOAX7aShe9r6i87CxdYbTXAofxwyXkEclBhIsWDEsy_J9CjpCKUPF4O6S3FRP71vjiNHjta-uCXG0280szgxu_IZ3EPEt9X1D.png?r=aa9" alt="img-caption" className='img-caption' />
                    <p>Survivors of a plane crash try to stay alive on a mysterious island in this series that "remains one of the best things TV has ever given us</p>
                    <div className="hero-buttons">
                        <button className='btn'> <img src={play} alt="play" /> <span>Play</span></button>
                        <button className='btn info'><img src={info} alt="info" /><span>More Info</span></button>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Home