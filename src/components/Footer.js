import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import ReactTooltip from 'react-tooltip';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a className='contact-icon' data-tip="Email Me" href="mailto:rossgarfield@gmail.com" target="_blank" rel="noreferrer">
            <EmailIcon />
          </a>

          <a className='contact-icon' data-tip="View My Resume" href="1vSPLaZBuT42D7KUomeCaKDdnweY6up2ZjRxmUdgAG5FMen8lEBCe7hHCt8TvJI8IVoo7KHaVdM4eo8g" target="_blank" rel="noreferrer">
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
        <p> &copy; 2022 rgarfield11.github.io/rossgarfield</p>
    </div>
  )
}

export default Footer