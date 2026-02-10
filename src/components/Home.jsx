import React from 'react'
import './Home.css'
import homeImg from '../images/bg.jpg'

function Home() {
    return (
        <div>
        <section id='Home'>
        <div className='main' style={{ backgroundImage: `url(${homeImg})` }}>
            <div className='slogan'>Light  <span >Bites</span> or Heavy Hits <br/>— We’ve Got You Covered.</div>
        </div>
        </section>
        </div>
    )
}

export default Home