import React, { useEffect } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import imgCBOH from '../images/CBOH.png';
import '../style/projectImage.css'

const Project = ({ project: { name, projectInfo, siteInfo, technos, image, link, link2 } }) => {

  return (
    <div>
      <Accordion className='project-accordion'>
        <AccordionSummary>
          <figure class="snip1585">
            <img src={require(`../images/${image}`)} className='project-image' />
            <figcaption>
              <h3>{name}</h3>
            </figcaption>
          </figure>
        </AccordionSummary>
        <AccordionDetails>
          <ul className='project-list'>
            <li><span>Contexte: </span>{projectInfo}</li>
            <li><span>Infos: </span>{siteInfo}</li>
            <li><span>Technos: </span>{technos.map(t => ` ${t}`)}</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Project;
