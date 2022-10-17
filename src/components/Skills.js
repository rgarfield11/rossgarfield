import React from 'react'
import js from '../assets/js.png'
import css from '../assets/css.png'
import react from '../assets/logo192.png'
import html from '../assets/html.png'
import ruby from '../assets/ruby.png'
import rails from '../assets/rails.png'
import postgresql from '../assets/postgresql.png'
import '../styles/Skills.css'

function Skills() {
  return (
    <div className='skills'>
        <div className='skill'>
            <img src={js} alt="JavaScript" />
            <p>JavaScript</p>
        </div>
        <div className='skill'>
            <img src={react} alt="ReactJS" />
            <p>ReactJS</p>
        </div>
        <div className='skill'>
            <img src={ruby} alt="Ruby" />
            <p>Ruby</p>
        </div>
        <div className='skill'>
            <img src={rails} alt="Rails" />
            <p>Rails</p>
        </div>
        <div className='skill'>
            <img src={postgresql} alt="Postgresql" />
            <p>Postgresql</p>
        </div>
        <div className='skill'>
            <img src={html} alt="HTML" />
            <p>HTML</p>
        </div>
        <div className='skill'>
            <img src={css} alt="CSS" />
            <p>CSS</p>
        </div>
        
    </div>
  )
}

export default Skills