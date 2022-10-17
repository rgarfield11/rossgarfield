import React from 'react';
import Profile from '../assets/Profile.jpg'
import Skills from '../components/Skills'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <img className="profile" src={Profile} alt="" />
        <h2>Hi, my name is Ross.</h2>
        <div className='prompt'>
          <p>I'm a software engineer with a passion for learning and creating.</p>
          <a href="https://www.linkedin.com/in/rossgarfield/" target="_blank">
            <LinkedInIcon />
          </a>
          <a href="mailto:rossgarfield@gmail.com" target="_blank" >
            <EmailIcon />
          </a>
          <a href="https://github.com/rgarfield11" target="_blank">
            <GitHubIcon />
          </a>
          <a href="https://docs.google.com/document/d/1OOSamrcFre-r7etsvDcOWUdiq7lpV7dZ0Jlvmi4ES_o/edit" target="_blank">
            <DescriptionIcon />
          </a>
          
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        {/* <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, BootStrap, MaterialUI</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, SQL, Ruby, Rails</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, Ruby</span>
          </li>
        </ol> */}
        <Skills />
      </div>
    </div>
  )
}

export default Home