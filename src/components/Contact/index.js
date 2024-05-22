import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    // After 3 seconds, allow hovering over text
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_bqp6o2s',
                'template_lx2uzji',
                refForm.current,
                'QMNaemtsErR9zXCDF'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={"Contact Me".split("")}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input 
                                        type='text' 
                                        name='from_name' 
                                        placeholder='Name' 
                                        required 
                                    />
                                </li>
                                <li className='half'>
                                    <input 
                                        type='email' 
                                        name='email' 
                                        placeholder='Email' 
                                        required 
                                    />
                                </li>
                                <li>
                                    <input 
                                        type='text' 
                                        name='subject' 
                                        placeholder='Subject' 
                                        required 
                                    />
                                </li>
                                <li>
                                    <textarea 
                                        name='message' 
                                        placeholder='Message' 
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input 
                                        type='submit' 
                                        className='flat-button' 
                                        value='SEND' 
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Elijah Delavar,
                    <br />
                    United States,
                    <br />
                    Gingerfoot Ln, 21200
                    <br />
                    Woodland
                    <br />
                    <span>elijahdelavar5@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[45.375,-121.322]} zoom={13}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Marker position={[45.375,-121.322]}>
                            <Popup>Elijah lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact