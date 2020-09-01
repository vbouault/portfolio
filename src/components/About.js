import React from 'react';
import cv from '../images/cv.pdf';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const About = () => {
  return (
    <div className='about-page'>
      <h2>A propos de moi</h2>
      <div className='about-container'>
        <p>
          Après plusieurs années à travailler en tant que technicien supèrieur en automatisme industriel puis en télécommunication,
          j'ai découvert le monde du développement et j'ai tout de suite été passionné.
          J'ai alors tout mis en oeuvre pour acquérir les compétences de ce métier, en autodidacte, 
          puis en intégrant la formation Wild Code School à Lyon.
        </p>
        <p>Je recherche actuellement une alternance (de novembre 2020 à novembre 2021) pour appliquer ce que j'ai appris tout en poursuivant ma formation.</p>
        <p><a href={cv} download >Télécharger mon CV</a></p>
        <div className='logo-container'>
          <div>
            <img className='logo' src={require('../images/html.png')} alt='logo html' />
            <img className='logo' src={require('../images/css.png')} alt='logo css' />
            <img className='logo' src={require('../images/es6.png')} alt='logo javascript' />
          </div>
          <div>
            <img className='logo' src={require('../images/react.png')} alt='logo react' />
            <img className='logo' src={require('../images/node.png')} alt='logo node' />
            <img className='logo' src={require('../images/agile-scrum.png')} alt='logo agile scrum' />
          </div>
        </div>
        <div className='contact-icons-container'>
          <a href='https://www.linkedin.com/in/vianney-bouault' target='_blank' rel="noopener noreferrer"><LinkedInIcon className='header-icon contact-icon' style={{ fontSize: '45px' }} /></a>
          <a href='https://github.com/vbouault' target='_blank' rel="noopener noreferrer"><GitHubIcon className='header-icon contact-icon' style={{ fontSize: '43px' }} /></a>
        </div>
      </div>
    </div>
  )
}

export default About
