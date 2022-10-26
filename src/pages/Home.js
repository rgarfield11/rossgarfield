import React from 'react';
import Profile from '../assets/Profile.jpg';
import Skills from '../components/Skills';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import ReactTooltip from 'react-tooltip';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <img className="profile" src={Profile} alt="" />
        <h2>Hi, my name is Ross</h2>
        <div className='prompt'>
          <p>I'm a software engineer with a passion for learning and creating.</p>
    
          <a className='contact-icon' data-tip="Email Me" href="mailto:rossgarfield@gmail.com" target="_blank" rel="noreferrer">
            <EmailIcon />
          </a>

          <a className='contact-icon' data-tip="View My Resume" href="https://docs.google.com/document/d/e/2PACX-1vSPLaZBuT42D7KUomeCaKDdnweY6up2ZjRxmUdgAG5FMen8lEBCe7hHCt8TvJI8IVoo7KHaVdM4eo8g/pub" target="_blank" rel="noreferrer">
            <DescriptionIcon />
          </a>

          <a className='contact-icon' data-tip="View My LinkedIn" href="https://www.linkedin.com/in/rossgarfield/" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>

          <a className='contact-icon' data-tip="View My Github" href="https://github.com/rgarfield11" target="_blank" rel="noreferrer">
            <GitHubIcon />
          </a>

          <ReactTooltip />
          
        </div>
      </div>
      <div className='skills-header'>
        <h1>Skills</h1>
      </div>
      <div className='skills'>
        <Skills />
      </div>
    </div>
  )
}

export default Home