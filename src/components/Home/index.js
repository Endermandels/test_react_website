import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
    // useState helps with different stages of animation (fade in, hover, idle)
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['l','o','b','o','d','a','n']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']

    // After 4 seconds, allow hovering over text
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    // The _i indexes are roughly 0.1 seconds apart.
    // This means that the letters show up 0.1 seconds one after another.

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt='developer' />
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15} />
                        <br />
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22} />
                    </h1>
                    <h2>Frontend Developer / JavaScript Expert / YouTuber</h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman' />
        </>
    );
}

export default Home