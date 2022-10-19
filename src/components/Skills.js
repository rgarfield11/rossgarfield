import React from 'react'
import js from '../assets/js.png'
import css from '../assets/css.png'
import react from '../assets/logo192.png'
import html from '../assets/html.png'
import ruby from '../assets/ruby.png'
import rails from '../assets/rails.jpeg'
import postgresql from '../assets/postgresql.png'
import '../styles/Home.css'

function Skills() {
  return (
    <div className='grid-container'>
        <div className='grid-item grid-item-1'>
            <img src={js} alt="JavaScript" />
            <p>JavaScript</p>
        </div>
        <div className='grid-item grid-item-2'>
            <img src={react} alt="ReactJS" />
            <p>ReactJS</p>
        </div>
        <div className='grid-item grid-item-3'>
            <img src={ruby} alt="Ruby" />
            <p>Ruby</p>
        </div>
        <div className='grid-item grid-item-4'>
            <img src={rails} alt="Rails" />
            <p>Rails</p>
        </div>
        <div className='grid-item grid-item-5'>
            <img src={postgresql} alt="Postgresql" />
            <p>Postgresql</p>
        </div>
        <div className='grid-item grid-item-6'>
            <img src={html} alt="HTML" />
            <p>HTML</p>
        </div>
        <div className='grid-item grid-item-7'>
            <img src={css} alt="CSS" />
            <p>CSS</p>
        </div>
        
    </div>
  )
}

export default Skills