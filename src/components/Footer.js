import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
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
        <p> &copy; 2022 rossgarfield.com</p>
    </div>
  )
}

export default Footer